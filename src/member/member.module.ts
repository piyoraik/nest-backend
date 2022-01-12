import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberController } from './member.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from 'src/entity/member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Members])],
  providers: [MemberService],
  controllers: [MemberController],
})
export class MemberModule {}
