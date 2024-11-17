import { PartialType } from '@nestjs/mapped-types';
import { CreateHealthRecordDto } from './create-health_record.dto';

export class UpdateHealthRecordDto extends PartialType(CreateHealthRecordDto) {}
