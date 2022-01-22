import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AirBackService } from './air-back.service';
import { CreateAirBackDTO } from './dto/create.air-back.dto';

@Controller('air-back')
export class AirBackController {
  constructor(private readonly airBackService: AirBackService) {}

  @Get()
  findAll() {
    return this.airBackService.findAll();
  }

  @Post(':airBackId')
  create(@Body() body: CreateAirBackDTO) {
    return this.airBackService.create(body);
  }

  @Get(':airBackId')
  findOne(@Param('airBackId') id: string) {
    return this.airBackService.findOneID(+id);
  }
}
