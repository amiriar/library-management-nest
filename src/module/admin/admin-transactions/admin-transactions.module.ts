import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminTransactionsController } from './admin-transactions.controller';
import { AdminTransactionsService } from './admin-transactions.service';
import { Transaction, TransactionSchema } from '../../transactions/entities/transaction.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])
  ],
  controllers: [AdminTransactionsController],
  providers: [AdminTransactionsService, JwtService],
  exports: [AdminTransactionsService]
})
export class AdminTransactionsModule {}
