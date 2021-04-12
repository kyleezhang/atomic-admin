import { IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// 用户注册信息
export class LoginInfoDto {
  @ApiProperty()
  @IsString()
  account: string;

  @ApiProperty()
  @IsString()
  @Matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,30}$/g,
    {
      message: '密码必须包含字母、数字、特殊字符，并且长度在8～30',
    },
  )
  password: string;
}
