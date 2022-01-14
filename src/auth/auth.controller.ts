import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/member-login-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Post('/signup')
  // signup() {}

  @Post('/login')
  login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }
}
