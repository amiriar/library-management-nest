import { PartialType } from '@nestjs/swagger';
import { CreateAdminBookDto } from './create-admin-book.dto';

export class UpdateAdminBookDto extends PartialType(CreateAdminBookDto) {}
