import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './module/auth/auth.module';
import { AdminTransactionsModule } from './module/admin/admin-transactions/admin-transactions.module';
import { TransactionsModule } from './module/transactions/transactions.module';
import { UsersModule } from './module/users/users.module';
import { BooksModule } from './module/books/books.module';
import { AdminUsersModule } from './module/admin/admin-users/admin-users.module';
import { AdminBooksModule } from './module/admin/admin-books/admin-books.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv'
import { ConfigModule } from '@nestjs/config';

dotenv.config()

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    BooksModule,
    UsersModule,
    TransactionsModule,
    AuthModule,
    AdminTransactionsModule,
    AdminUsersModule,
    AdminBooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
