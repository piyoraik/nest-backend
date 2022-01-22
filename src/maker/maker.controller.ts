import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMakerDTO } from './dto/create.maker.dto';
import { MakerService } from './maker.service';

@Controller('maker')
export class MakerController {
  constructor(private readonly makerService: MakerService) {}

  @Get()
  findAll() {
    return this.makerService.findAll();
  }

  @Post()
  create(@Body() body: CreateMakerDTO) {
    return this.makerService.create(body);
  }

  @Get(':makerId')
  findOne(@Param('makerId') id: string) {
    return this.makerService.findOneID(+id);
  }
}
