import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterInfoDto } from './dto/register.dto';

@Controller('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async users() {
    return await this.authService.getUsers();
  }

  @Post('/register')
  async register(@Body() registerInfo: RegisterInfoDto) {
    return await this.authService.addUser(registerInfo);
  }
}
