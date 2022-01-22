import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFuelDTO } from './dto/create.fuel.dto';
import { FuelService } from './fuel.service';

@Controller('fuel')
export class FuelController {
  constructor(private readonly fuelService: FuelService) {}

  @Get()
  findAll() {
    return this.fuelService.findAll();
  }

  @Post()
  create(@Body() body: CreateFuelDTO) {
    return this.fuelService.create(body);
  }

  @Get(':fuelId')
  findOne(@Param('fuelId') id: string) {
    return this.fuelService.findOneID(+id);
  }
}
