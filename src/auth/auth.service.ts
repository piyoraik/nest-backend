import { Injectable } from '@nestjs/common';
import { MemberService } from 'src/member/member.service';

@Injectable()
export class AuthService {
  constructor(private memberService: MemberService) {}

  async validateUser(name: string, password: string) {
    // const member = await this.memberService.findOne
  }
}
