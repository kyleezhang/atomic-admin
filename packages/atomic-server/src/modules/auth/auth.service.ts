import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserInfoModule } from './entities/user.module';
import { RegisterInfoDto } from './dto/register.dto';
import { CommonCodes } from '../../shared/constants/code';
import { ErrorTypes } from '../../shared/constants/error-type';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserInfoModule)
    private readonly userRepository: typeof UserInfoModule,
  ) {}

  /**
   * 获取用户列表
   */
  async getUsers() {
    return await this.userRepository.findAndCountAll();
  }

  /**
   * 添加用户
   * @param payload 用户信息
   */
  async addUser(payload: RegisterInfoDto) {
    if (payload.password !== payload.rePassword) {
      throw new HttpException(
        {
          code: CommonCodes.PARAMETER_INVALID,
          message: '两次密码输入不同，请重新输入',
          error: ErrorTypes.INVALID_PARAMETER,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.userRepository.create({ ...payload, ...{ status: 0, role: 0 } });
  }
}
