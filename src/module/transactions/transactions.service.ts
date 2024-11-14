import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import {
  Transaction,
  TransactionDocument,
} from './entities/transaction.entity';
import { User, UserDocument } from '../users/entities/user.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<TransactionDocument>,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    try {
      const createdTransaction = new this.transactionModel(
        createTransactionDto,
      );
      const user = await this.userModel.findById(createTransactionDto.user).exec();
      if (!user) {
        throw new NotFoundException(`User with ID ${createTransactionDto.user} not found`);
      }
      user.balance += createTransactionDto.amount;
      await user.save();
      return await createdTransaction.save();
    } catch (error) {
      console.error('Error creating transaction:', error);
      throw new InternalServerErrorException('Error creating transaction');
    }
  }

  async findOne(id: string): Promise<Transaction> {
    try {
      const transaction = await this.transactionModel.findById(id).exec();
      if (!transaction) {
        throw new NotFoundException(`Transaction with ID ${id} not found`);
      }
      return transaction;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error fetching transaction');
    }
  }

  async update(
    id: string,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<Transaction> {
    try {
      const updatedTransaction = await this.transactionModel
        .findByIdAndUpdate(id, updateTransactionDto, { new: true })
        .exec();
      if (!updatedTransaction) {
        throw new NotFoundException(`Transaction with ID ${id} not found`);
      }
      return updatedTransaction;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error updating transaction');
    }
  }
}
