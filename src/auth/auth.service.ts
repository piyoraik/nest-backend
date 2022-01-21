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

  async login(login: LoginDto) {
    const member = (await this.validateUser(login)) as Members;
    if (member) {
      const payload = this.jwtService.sign({ email: member.email });
      return {
        payload,
        member,
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async signUp(member: Members) {
    const payload = this.jwtService.sign({ email: member.email });
    return {
      payload,
      member,
    };
  }
}
