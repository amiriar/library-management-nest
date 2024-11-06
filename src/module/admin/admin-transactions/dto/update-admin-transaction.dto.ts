import { PartialType } from '@nestjs/swagger';
import { CreateAdminTransactionDto } from './create-admin-transaction.dto';

export class UpdateAdminTransactionDto extends PartialType(CreateAdminTransactionDto) {}
