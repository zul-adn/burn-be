import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHealthRecordDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  record_by: string;

  @IsString()
  @IsNotEmpty()
  general_note: string;

  @IsString()
  @IsNotEmpty()
  records: { name: string; value: number; unit: string; note: string }[];
}
