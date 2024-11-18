import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMasterServiceDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  unit: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
