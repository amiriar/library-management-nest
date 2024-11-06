import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './module/books/books.module';
import { UsersModule } from './module/users/users.module';
import { TransactionsModule } from './module/transactions/transactions.module';
import { BooksModule } from './module/admin/books/books.module';
import { UsersModule } from './module/admin/users/users.module';
import { TransactionsModule } from './module/admin/transactions/transactions.module';

@Module({
  imports: [BooksModule, UsersModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
