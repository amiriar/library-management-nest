import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminBooksService } from './admin-books.service';
import { AdminBooksController } from './admin-books.controller';
import { Book, BookSchema } from '../../books/entities/book.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/module/users/users.service';
import { User, UserSchema } from 'src/module/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [AdminBooksController],
  providers: [AdminBooksService, JwtService, UsersService],
})
export class AdminBooksModule {}
