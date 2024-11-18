import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHealthRecordDto } from './dto/create-health_record.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HealthRecord } from './schema/health_record.schema';
// import { UpdateHealthRecordDto } from './dto/update-health_record.dto';

@Injectable()
export class HealthRecordsService {
  constructor(
    @InjectModel('HealthRecord')
    private readonly HealthRecordModel: Model<HealthRecord>,
  ) {}

  async create(createHealthRecordDto: CreateHealthRecordDto) {
    try {
      await this.HealthRecordModel.create(createHealthRecordDto);
      return `This action adds a new healthRecord ${createHealthRecordDto}`;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findAllByUserId(user_id: string) {
    try {
      this.HealthRecordModel.find({ user_id })
        .then((datas) => {
          return datas;
        })
        .catch((e) => {
          throw new BadRequestException(e);
        });
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findOne(id: string) {
    return id;
    // try {
    //   const datas = await this.HealthRecordModel.findById();
    //   return `This action returns a #${id} healthRecord`;
    // } catch (error) {
    //   throw new BadRequestException(error);
    // }
  }

  // update(id: number, updateHealthRecordDto: UpdateHealthRecordDto) {
  //   return `This action updates a #${id} healthRecord`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} healthRecord`;
  // }
}
