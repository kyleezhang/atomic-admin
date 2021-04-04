import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserInfoModule } from './entities/user.module';

@Module({
  imports: [SequelizeModule.forFeature([UserInfoModule])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
