import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { hash } from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<User>,
  ) {}

  // Register
  async create(createUserDto: CreateUserDto) {
    const checkIfUserExist = await this.UserModel.find({
      email: createUserDto.email,
    });

    if (!checkIfUserExist) {
      throw new HttpException('User already exists', HttpStatus.NOT_FOUND);
    }

    const createUser = await new this.UserModel({
      ...createUserDto,
      password: await hash(createUserDto.password, 10),
    }).save();

    if (createUser) {
      return {
        status: HttpStatus.OK,
        massage: 'Register Successfully',
      };
    }

    // return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(query: FilterQuery<User>) {
    const user = (await this.UserModel.findOne(query)).toObject();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
