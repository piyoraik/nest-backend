import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMembersDTO } from 'src/members/dto/create-members-dto';
import { MembersService } from 'src/members/members.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/member-login-dto';

@ApiTags('認証')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly memberService: MembersService,
  ) {}

  @Post('/signup')
  async signup(@Body() body: CreateMembersDTO) {
    const member = await this.memberService.create(body);
    return this.authService.signUp(member);
  }

  @Post('/login')
  login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }
}
