import { Controller, Post, Body } from '@nestjs/common';
import { CreateMemberDTO } from 'src/members/dto/create-members-dto';
import { MemberService } from 'src/members/members.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/member-login-dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly memberService: MemberService,
  ) {}

  @Post('/signup')
  async signup(@Body() body: CreateMemberDTO) {
    const member = await this.memberService.create(body);
    return this.authService.signUp(member);
  }

  @Post('/login')
  login(@Body() login: LoginDto) {
    return this.authService.login(login);
  }
}
