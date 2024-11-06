import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminBooksService } from './admin-books.service';
import { CreateAdminBookDto } from './dto/create-admin-book.dto';
import { UpdateAdminBookDto } from './dto/update-admin-book.dto';

@Controller('admin-books')
export class AdminBooksController {
  constructor(private readonly adminBooksService: AdminBooksService) {}

  @Post()
  create(@Body() createAdminBookDto: CreateAdminBookDto) {
    return this.adminBooksService.create(createAdminBookDto);
  }

  @Get()
  findAll() {
    return this.adminBooksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminBooksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminBookDto: UpdateAdminBookDto) {
    return this.adminBooksService.update(+id, updateAdminBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminBooksService.remove(+id);
  }
}
