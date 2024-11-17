import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HealthRecordsService } from './health_records.service';
import { CreateHealthRecordDto } from './dto/create-health_record.dto';
// import { UpdateHealthRecordDto } from './dto/update-health_record.dto';

@Controller('records')
export class HealthRecordsController {
  constructor(private readonly healthRecordsService: HealthRecordsService) {}

  @Post()
  create(@Body() createHealthRecordDto: CreateHealthRecordDto) {
    return this.healthRecordsService.create(createHealthRecordDto);
  }

  @Get('user/:user_id')
  findAllByUserId(@Param('user_id') user_id: string) {
    return this.healthRecordsService.findAllByUserId(user_id);
  }

  // @Get()
  // findAll() {
  //   return this.healthRecordsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.healthRecordsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateHealthRecordDto: UpdateHealthRecordDto,
  // ) {
  //   return this.healthRecordsService.update(+id, updateHealthRecordDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.healthRecordsService.remove(+id);
  // }
}
