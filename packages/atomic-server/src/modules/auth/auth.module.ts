import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserInfoModule } from './entities/user.module';
import { JwtModule } from '@nestjs/jwt';
import { secretKey } from '../../shared/constants/secret';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
  imports: [
    SequelizeModule.forFeature([UserInfoModule]),
    JwtModule.register({
      secret: secretKey,
      signOptions: {
        expiresIn: '8h', // jwt token过期时效
      },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
