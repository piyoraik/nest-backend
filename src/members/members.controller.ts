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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne({ id: +id });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateMembersDTO) {
    return this.memberService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.memberService.softDelete(+id);
  }
}
