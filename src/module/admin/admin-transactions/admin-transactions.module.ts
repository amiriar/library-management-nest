import { Module } from '@nestjs/common';
import { AdminTransactionsService } from './admin-transactions.service';
import { AdminTransactionsController } from './admin-transactions.controller';

@Module({
  controllers: [AdminTransactionsController],
  providers: [AdminTransactionsService],
})
export class AdminTransactionsModule {}
