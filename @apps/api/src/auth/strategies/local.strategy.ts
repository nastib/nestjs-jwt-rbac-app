import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.authService.signinLocal({ email, password });

    if (!user) {
      throw new UnauthorizedException('Credentials incorrect');
    }
    return user;
  }
}
