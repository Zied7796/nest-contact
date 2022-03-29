import {
  IsOptional,
  IsPhoneNumber,
  Length,
} from 'class-validator';

export default class CreateUserDto {
  @IsPhoneNumber('TN')
  phone: number;
  @Length(2, 25)
  firstName: string;
  @Length(2, 25)
  lastName: string;
  @IsOptional()
  address?: string;
}
