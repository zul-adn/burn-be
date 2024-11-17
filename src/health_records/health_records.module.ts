import { Module } from '@nestjs/common';
import { HealthRecordsService } from './health_records.service';
import { HealthRecordsController } from './health_records.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  HealthRecord,
  HealthRecordsSchema,
} from './schema/health_record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: HealthRecord.name,
        schema: HealthRecordsSchema,
      },
    ]),
  ],
  controllers: [HealthRecordsController],
  providers: [HealthRecordsService],
})
export class HealthRecordsModule {}
