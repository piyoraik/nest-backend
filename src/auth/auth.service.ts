import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { identity } from 'rxjs';
import { MemberService } from 'src/member/member.service';

@Injectable()
export class AuthService {
  constructor(
    private memberService: MemberService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const member = await this.memberService.findOne({ email });
    if (member && member.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = member;
      return result;
    }
    return null;
  }

  async login(member: any) {
    const payload = { id: member.id, email: member.email };
    return this.jwtService.sign(payload);
  }
}
