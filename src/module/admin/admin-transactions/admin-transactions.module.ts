import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminTransactionsController } from './admin-transactions.controller';
import { AdminTransactionsService } from './admin-transactions.service';
import {
  Transaction,
  TransactionSchema,
} from '../../transactions/entities/transaction.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/module/users/users.service';
import { User, UserSchema } from 'src/module/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AdminTransactionsController],
  providers: [AdminTransactionsService, JwtService, UsersService],
  exports: [AdminTransactionsService],
})
export class AdminTransactionsModule {}
