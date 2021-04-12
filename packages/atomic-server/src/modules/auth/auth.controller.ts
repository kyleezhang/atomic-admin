import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RegisterInfoDto } from './dto/register.dto';
import { LoginInfoDto } from './dto/login.dto';
import { ApiTags, ApiBasicAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiBasicAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async allUsers() {
    return await this.authService.getAllUsers();
  }

  @ApiBody({ type: RegisterInfoDto })
  @Post('/register')
  async register(@Body() registerInfo: RegisterInfoDto) {
    return await this.authService.addUser(registerInfo);
  }

  @Post('/login')
  async login(@Body() loginParams: LoginInfoDto) {
    return await this.authService.login(loginParams);
  }
}
