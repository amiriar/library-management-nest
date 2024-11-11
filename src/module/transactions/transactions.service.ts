import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { Transaction, TransactionDocument } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>
  ) {}

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction> {
    try {
      const createdTransaction = new this.transactionModel(createTransactionDto);
      return await createdTransaction.save();
    } catch (error) {
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

  async update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
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
