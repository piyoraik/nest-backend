import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { MemberService } from 'src/member/member.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [MemberService, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
