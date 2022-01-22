import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AirConditionerService } from './air-conditioner.service';
import { CreateAirConditionerDTO } from './dto/create.air-conditioner.dto';

@Controller('air-conditioner')
export class AirConditionerController {
  constructor(private readonly airConditionerService: AirConditionerService) {}

  @Get()
  findAll() {
    return this.airConditionerService.findAll();
  }

  @Post()
  create(@Body() body: CreateAirConditionerDTO) {
    return this.airConditionerService.create(body);
  }

  @Get(':airConditionerId')
  findOne(@Param('airConditionerId') id: string) {
    return this.airConditionerService.findOneID(+id);
  }
}
