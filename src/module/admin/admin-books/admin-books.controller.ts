import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AdminBooksService } from './admin-books.service';
import { Roles } from 'src/common/decorators/roles.decorator';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { AuthGuard } from 'src/common/guard/AuthGuard.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Controller('admin-books')
@UseGuards(AuthGuard, RolesGuard)
export class AdminBooksController {
  constructor(private readonly adminBooksService: AdminBooksService) {}

  @Post()
  @Roles('ADMIN')
  create(@Body() createBookDto: CreateBookDto) {
    const jalaliDate = new Date().toLocaleDateString('fa-IR');
    return this.adminBooksService.create({
      ...createBookDto,
      date: jalaliDate,
    });
  }
  @Patch(':id')
  @Roles('ADMIN')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.adminBooksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @Roles('ADMIN')
  remove(@Param('id') id: string) {
    return this.adminBooksService.remove(id);
  }
}
