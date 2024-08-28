import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    return this.authService.login(user);
  }

  @Post('sign-up')
  async singUp(@Body() user: any) {
    return this.authService.signUp(user);
  }
}
