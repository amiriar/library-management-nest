import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { UpdateAdminUserDto } from './dto/update-admin-user.dto';
import { ApiQuery } from '@nestjs/swagger';
import { Roles } from 'src/common/decorators/roles.decorator';
import { AuthGuard } from 'src/common/guard/AuthGuard.guard';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Controller('admin-users')
@UseGuards(AuthGuard, RolesGuard)
export class AdminUsersController {
  constructor(private readonly adminUsersService: AdminUsersService) {}
  
  @Get()
  @Roles('ADMIN')
  @ApiQuery({ name: 'page', required: false, description: 'Page number' })
  @ApiQuery({ name: 'limit', required: false, description: 'Limit per page' })
  async findAll(@Query('page') page: number, @Query('limit') limit: number) {
    try {
      return await this.adminUsersService.findAll(page, limit);
    } catch (error) {
      throw new Error(`Failed to fetch admin users: ${error.message}`);
    }
  }

  @Get(':id')
  @Roles('ADMIN')
  async findOne(@Param('id') id: string) {
    try {
      return await this.adminUsersService.findOne(id);
    } catch (error) {
      throw new Error(`Failed to fetch admin user: ${error.message}`);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAdminUserDto: UpdateAdminUserDto,
  ) {
    try {
      return await this.adminUsersService.update(id, updateAdminUserDto);
    } catch (error) {
      throw new Error(`Failed to update admin user: ${error.message}`);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.adminUsersService.remove(id);
    } catch (error) {
      throw new Error(`Failed to delete admin user: ${error.message}`);
    }
  }
}
