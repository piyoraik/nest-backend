import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags, PartialType } from '@nestjs/swagger';
import { Members } from 'src/entity/members.entity';
import { CreateMembersDTO } from './dto/create-members-dto';
import { UpdateMembersDTO } from './dto/update-members-dto';
import { MembersService } from './members.service';

@ApiTags('メンバー')
@Controller('member')
export class MembersController {
  constructor(private readonly memberService: MembersService) {}

  @Get()
  fetchAll() {
    return this.memberService.findAll();
  }

  @ApiQuery({ type: PartialType(CreateMembersDTO), required: false })
  @Get('search')
  search(@Query() attrs: Partial<Members>) {
    return this.memberService.findWhere(attrs);
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
