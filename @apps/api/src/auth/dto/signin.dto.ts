import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
export class SigninDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
