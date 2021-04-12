import { IsString, Matches, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// 用户注册信息
export class RegisterInfoDto {
  @ApiProperty({
    type: String,
    description: '用户名',
    default: 'admin',
  })
  @IsString()
  @IsNotEmpty()
  account: string;

  @ApiProperty({
    type: String,
    description: '用户邮箱，必须符合邮箱格式',
    default: '********.qq.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    type: String,
    description: '登录密码，必须包含字母、数字、特殊字符，并且长度在8～30',
    default: 'hello-world2021',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,30}$/g,
    {
      message: '密码必须包含字母、数字、特殊字符，并且长度在8～30',
    },
  )
  password: string;
}
