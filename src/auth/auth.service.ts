import { Injectable } from '@nestjs/common';
import { MemberService } from 'src/member/member.service';

@Injectable()
export class AuthService {
  constructor(private memberService: MemberService) {}

  async validateUser(name: string, password: string) {
    const member = await this.memberService.findOne('name', name);
    if (member && member.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = member;
      return result;
    }
    return null;
  }
}
