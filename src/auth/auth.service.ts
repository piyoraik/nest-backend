import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Members } from 'src/entity/members.entity';
import { MembersService } from 'src/members/members.service';
import { LoginDto } from './dto/member-login-dto';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MembersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: LoginDto) {
    const member = await this.memberService.findOne({ email: login.email });
    if (member && member.password === login.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = member;
      return result;
    }
    return new UnauthorizedException('Invalid credentials');
  }

  async login(member: LoginDto) {
    if (await this.validateUser(member)) {
      const payload = { email: member.email };
      return this.jwtService.sign(payload);
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async signUp(member: Members) {
    const payload = { email: member.email };
    return this.jwtService.sign(payload);
  }
}
