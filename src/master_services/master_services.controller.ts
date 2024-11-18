import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MasterServicesService } from './master_services.service';
import { CreateMasterServiceDto } from './dto/create-master_service.dto';
import { UpdateMasterServiceDto } from './dto/update-master_service.dto';

@Controller('services')
export class MasterServicesController {
  constructor(private readonly masterServicesService: MasterServicesService) {}

  @Post()
  create(@Body() createMasterServiceDto: CreateMasterServiceDto) {
    return this.masterServicesService.create(createMasterServiceDto);
  }

  @Get()
  findAll() {
    return this.masterServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterServicesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMasterServiceDto: UpdateMasterServiceDto,
  ) {
    return this.masterServicesService.update(+id, updateMasterServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterServicesService.remove(+id);
  }
}
