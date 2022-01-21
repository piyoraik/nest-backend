import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { UpdateMembersDTO } from './dto/update-members-dto';
import { MembersService } from './members.service';

@Controller('member')
export class MembersController {
  constructor(private readonly memberService: MembersService) {}

  @Get()
  fetchAll() {
    return this.memberService.findAll();
  }

  @Get(':memberID')
  findOne(@Param('memberID') id: string) {
    return this.memberService.findOne({ id: +id });
  }

  @Patch(':memberID')
  update(@Param('memberID') id: string, @Body() body: UpdateMembersDTO) {
    return this.memberService.update(+id, body);
  }

  @Delete(':memberID')
  delete(@Param('memberID') id: string) {
    return this.memberService.softDelete(+id);
  }
}
