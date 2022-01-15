import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UpdateMemberDTO } from './dto/update-member-dto';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Get()
  fetchAll() {
    return this.memberService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateMemberDTO) {
    return this.memberService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.memberService.softDelete(+id);
  }
}
