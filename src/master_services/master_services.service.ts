import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMasterServiceDto } from './dto/create-master_service.dto';
import { UpdateMasterServiceDto } from './dto/update-master_service.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MasterService } from './schema/master_service.schema';

@Injectable()
export class MasterServicesService {
  constructor(
    @InjectModel('MasterService')
    private readonly MasterServiceModel: Model<MasterService>,
  ) {}

  async create(createMasterServiceDto: CreateMasterServiceDto) {
    await this.MasterServiceModel.create(createMasterServiceDto)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new BadRequestException(error);
      });
    // return 'This action adds a new masterService';
  }

  findAll() {
    return `This action returns all masterServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterService`;
  }

  update(id: number, updateMasterServiceDto: UpdateMasterServiceDto) {
    return `This action updates a #${id} masterService`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterService`;
  }
}
