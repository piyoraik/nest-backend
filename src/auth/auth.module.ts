import { Module } from '@nestjs/common';
import { MemberService } from 'src/member/member.service';
import { AuthService } from './auth.service';

@Module({
  imports: [MemberService],
  providers: [AuthService],
})
export class AuthModule {}
