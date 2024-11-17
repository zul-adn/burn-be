import { Module } from '@nestjs/common';
import { HealthRecordsService } from './health_records.service';
import { HealthRecordsController } from './health_records.controller';

@Module({
  controllers: [HealthRecordsController],
  providers: [HealthRecordsService],
})
export class HealthRecordsModule {}
