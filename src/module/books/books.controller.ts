import {
  Controller,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { AuthGuard } from 'src/common/guard/AuthGuard.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }
}
