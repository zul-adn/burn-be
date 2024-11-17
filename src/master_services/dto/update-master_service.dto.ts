import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterServiceDto } from './create-master_service.dto';

export class UpdateMasterServiceDto extends PartialType(CreateMasterServiceDto) {}
