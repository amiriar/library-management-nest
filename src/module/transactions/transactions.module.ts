import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsController } from './transactions.controller';
import { TransactionsService } from './transactions.service';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService, JwtService],
  exports: [TransactionsService]
})
export class TransactionsModule {}
