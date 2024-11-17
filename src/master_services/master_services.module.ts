import { Module } from '@nestjs/common';
import { MasterServicesService } from './master_services.service';
import { MasterServicesController } from './master_services.controller';

@Module({
  controllers: [MasterServicesController],
  providers: [MasterServicesService],
})
export class MasterServicesModule {}
