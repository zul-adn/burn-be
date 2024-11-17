import { Injectable } from '@nestjs/common';
import { CreateHealthRecordDto } from './dto/create-health_record.dto';
import { UpdateHealthRecordDto } from './dto/update-health_record.dto';

@Injectable()
export class HealthRecordsService {
  create(createHealthRecordDto: CreateHealthRecordDto) {
    return 'This action adds a new healthRecord';
  }

  findAll() {
    return `This action returns all healthRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} healthRecord`;
  }

  update(id: number, updateHealthRecordDto: UpdateHealthRecordDto) {
    return `This action updates a #${id} healthRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} healthRecord`;
  }
}
