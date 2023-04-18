import { CanActivate } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export class LocalGuard extends AuthGuard('local') implements CanActivate {
  constructor() {
    super();
  }
}
