import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAdminTransactionDto } from './dto/create-admin-transaction.dto';
import { UpdateAdminTransactionDto } from './dto/update-admin-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction, TransactionDocument } from 'src/module/transactions/entities/transaction.entity';
import { Model } from 'mongoose';

@Injectable()
export class AdminTransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<TransactionDocument>
  ) {}
  
  async findAll(page: number, limit: number): Promise<Transaction[]> {
    try {
      return await this.transactionModel.find().skip(page * limit).limit(limit).exec();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching transactions');
    }
  }

  async remove(id: string): Promise<Transaction> {
    try {
      const deletedTransaction = await this.transactionModel
        .findByIdAndDelete(id)
        .exec();
      if (!deletedTransaction) {
        throw new NotFoundException(`Transaction with ID ${id} not found`);
      }
      return deletedTransaction;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('Error deleting transaction');
    }
  }
}
