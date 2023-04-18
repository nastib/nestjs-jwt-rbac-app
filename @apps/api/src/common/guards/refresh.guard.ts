import { CanActivate, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class RefreshGuard
  extends AuthGuard('jwt-refresh')
  implements CanActivate
{
  constructor() {
    super();
  }
}
