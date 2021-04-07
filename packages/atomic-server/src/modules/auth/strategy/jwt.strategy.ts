import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { secretKey } from 'src/shared/constants/secret';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secretKey,
    });
  }

  /**
   * JWT验证方法
   * @param payload 用户信息
   */
  async validate(payload: {
    id: number;
    userName: string;
    realName: string;
    role: number;
  }) {
    return payload;
  }
}
