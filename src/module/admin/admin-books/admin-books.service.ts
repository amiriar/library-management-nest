import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book, BookDocument } from 'src/module/books/entities/book.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class AdminBooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const createdBook = new this.bookModel(createBookDto);
      return await createdBook.save();
    } catch (error) {
      throw new Error(`Failed to create book: ${error.message}`);
    }
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    try {
      const updatedBook = await this.bookModel
        .findByIdAndUpdate(id, updateBookDto, { new: true })
        .exec();
      if (!updatedBook) {
        throw new NotFoundException(`Book with ID "${id}" not found`);
      }
      return updatedBook;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to update book: ${error.message}`);
    }
  }

  async remove(id: string): Promise<Book> {
    try {
      const deletedBook = await this.bookModel.findByIdAndDelete(id).exec();
      if (!deletedBook) {
        throw new NotFoundException(`Book with ID "${id}" not found`);
      }
      return deletedBook;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new Error(`Failed to delete book: ${error.message}`);
    }
  }
}
