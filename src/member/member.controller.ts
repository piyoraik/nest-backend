import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMemberDTO } from './dto/create-member-dto';
import { UpdateMemberDTO } from './dto/update-user-dto';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberService.findOne('id', +id);
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
