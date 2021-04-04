import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class RegisterInfoDto {
  @IsNotEmpty()
  @IsString()
  accountName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/g)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,30}/g) // 密码必须包含字母、数字、特殊字符，并且长度在8～30
  password: string;

  @IsNotEmpty()
  @IsString()
  rePassword: string;
}
