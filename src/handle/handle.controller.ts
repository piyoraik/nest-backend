import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateHandleDTO } from './dto/create.handle.dto';
import { HandleService } from './handle.service';

@ApiTags('ハンドル')
@Controller('handle')
export class HandleController {
  constructor(private readonly handleService: HandleService) {}

  @Get()
  findAll() {
    return this.handleService.findAll();
  }

  @Post()
  create(@Body() body: CreateHandleDTO) {
    return this.handleService.create(body);
  }

  @Get(':handleId')
  findOne(@Param('handleId') id: string) {
    return this.handleService.findOneID(+id);
  }
}
