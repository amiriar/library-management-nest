import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Book, BookSchema } from './entities/book.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])
  ],
  controllers: [BooksController],
  providers: [BooksService, JwtService],
  exports: [BooksService]
})
export class BooksModule {}
