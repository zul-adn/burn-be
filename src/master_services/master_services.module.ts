import { Module } from '@nestjs/common';
import { MasterServicesService } from './master_services.service';
import { MasterServicesController } from './master_services.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  MasterServiceSchema,
  MasterService,
} from './schema/master_service.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: MasterService.name,
        schema: MasterServiceSchema,
      },
    ]),
  ],
  controllers: [MasterServicesController],
  providers: [MasterServicesService],
})
export class MasterServicesModule {}
