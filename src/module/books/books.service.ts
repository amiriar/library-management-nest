import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from '../admin/admin-books/dto/create-book.dto';
import { UpdateBookDto } from '../admin/admin-books/dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async findAll(): Promise<Book[]> {
    try {
      return await this.bookModel.find().exec();
    } catch (error) {
      throw new Error(`Failed to find books: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<Book> {
    try {
      const book = await this.bookModel.findById(id).exec();
      if (!book) {
        throw new NotFoundException(`Book with ID "${id}" not found`);
      }
      return book;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to find book: ${error.message}`);
    }
  }
}
