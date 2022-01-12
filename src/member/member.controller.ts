import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateMemberDTO } from './dto/create-member-dto';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  fetchAll() {
    return this.memberService.findAll();
  }

  @Post()
  create(@Body() body: CreateMemberDTO) {
    return this.memberService.create(body);
  }
}
