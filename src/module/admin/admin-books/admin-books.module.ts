import { Module } from '@nestjs/common';
import { AdminBooksService } from './admin-books.service';
import { AdminBooksController } from './admin-books.controller';

@Module({
  controllers: [AdminBooksController],
  providers: [AdminBooksService],
})
export class AdminBooksModule {}
