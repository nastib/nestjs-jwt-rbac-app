import { LocalStrategy } from './strategies/local.strategy';
import { RefreshTokensStrategy, AccessTokensStrategy } from './strategies';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({})],
  providers: [
    AuthService,
    AccessTokensStrategy,
    RefreshTokensStrategy,
    LocalStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
