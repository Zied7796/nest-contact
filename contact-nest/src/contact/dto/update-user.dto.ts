import {
  IsOptional,
  Length,
} from 'class-validator';

export default class UpdateUserDto {
  phone?: number;
  @Length(2, 25)
  @IsOptional()
  firstName?: string;
  @Length(2, 25)
  @IsOptional()
  lastName?: string;
  @IsOptional()
  address?: string
}
