import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserInfoModule } from './entities/user.module';
import { RegisterInfoDto } from './dto/register.dto';
import { LoginInfoDto } from './dto/login.dto';
import { CommonCodes } from 'src/shared/constants/code';
import { ErrorTypes } from 'src/shared/constants/error-type';
import { makeSalt, encryptPassword } from 'src/shared/utils/cryptogram';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserInfoModule)
    private readonly userRepository: typeof UserInfoModule,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 获取用户列表
   */
  async getAllUsers() {
    const users = await this.userRepository.findAll({ raw: true });
    return users.map((user: UserInfoModule) => ({
      id: user.id,
      account: user.account,
      realName: user.realName,
      telephone: user.telephone,
      role: user.role,
      status: user.status,
    }));
  }

  /**
   * 添加用户
   * @param payload 用户信息
   */
  async addUser(payload: RegisterInfoDto) {
    const users = await this.getAllUsers();
    const target = users.filter(
      (item: UserInfoModule) => item.account === payload.account,
    );
    if (target?.length > 0) {
      throw new HttpException(
        {
          code: ErrorTypes.INVALID_PARAMETER,
          message: '用户名已存在，请重新输入',
        },
        HttpStatus.FORBIDDEN,
      );
    }
    const salt: string = makeSalt();
    const hashPwd: string = encryptPassword(payload.password, salt);
    const res = await this.userRepository.create({
      ...payload,
      ...{ password: hashPwd, passwordSalt: salt },
    });
    return {
      code: CommonCodes.SUCCESSFUL,
      data: {
        id: res.id,
      },
    };
  }

  /**
   * 用户登录
   * @param payload 登录信息
   */
  async login(payload: LoginInfoDto) {
    const { account, password } = payload;
    const { data: user } = await this.validateUser(account, password);
    if (user) {
      return this.certificate(user);
    } else {
      throw new HttpException(
        {
          code: CommonCodes.PARAMETER_INVALID,
          message: '用户信息异常',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  /**
   * 用户信息校验
   * @param userName 用户名
   * @param password 用户密码
   */
  async validateUser(username: string, password: string) {
    const exitUser: UserInfoModule = await this.userRepository.findOne({
      where: { account: username },
    });
    if (exitUser) {
      const hashedPwd = exitUser.password;
      const salt = exitUser.passwordSalt;
      if (hashedPwd === encryptPassword(password, salt)) {
        return {
          code: CommonCodes.SUCCESSFUL,
          data: {
            id: exitUser.id,
            account: exitUser.account,
            realName: exitUser.realName,
            role: exitUser.role,
          },
        };
      } else {
        return {
          code: CommonCodes.PARAMETER_INVALID,
          message: '密码错误',
        };
      }
    } else {
      return {
        code: CommonCodes.NOT_FOUND,
        message: '当前用户不存在',
      };
    }
  }

  /**
   * JWT验证
   * @param user 用户信息
   */
  async certificate(user: {
    id: number;
    account: string;
    realName: string;
    role: number;
  }) {
    const payload = {
      id: user.id,
      userName: user.account,
      realName: user.realName,
      role: user.role,
    };
    try {
      const token = this.jwtService.sign(payload);
      return {
        code: CommonCodes.SUCCESSFUL,
        data: {
          token,
        },
      };
    } catch (error) {
      return {
        code: CommonCodes.PARAMETER_INVALID,
        data: {
          error,
        },
        message: '账号或密码错误',
      };
    }
  }
}
