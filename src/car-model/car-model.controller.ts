import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CarModelService } from './car-model.service';
import { CreateCarModelDTO } from './dto/create.car-model.dto';

@Controller('car-model')
export class CarModelController {
  constructor(private readonly carModelService: CarModelService) {}

  @Get()
  findAll() {
    return this.carModelService.findAll();
  }

  @Post()
  create(@Body() body: CreateCarModelDTO) {
    return this.carModelService.create(body);
  }

  @Get(':carModelId')
  findOne(@Param('carModelId') id: string) {
    return this.carModelService.findOneID(+id);
  }
}
