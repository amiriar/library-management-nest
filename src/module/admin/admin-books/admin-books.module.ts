import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminBooksService } from './admin-books.service';
import { AdminBooksController } from './admin-books.controller';
import { Book, BookSchema } from '../../books/entities/book.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])
  ],
  controllers: [AdminBooksController],
  providers: [AdminBooksService, JwtService],
})
export class AdminBooksModule {}
