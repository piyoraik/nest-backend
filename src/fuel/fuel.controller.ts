import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFuelDTO } from './dto/create.fuel.dto';
import { FuelService } from './fuel.service';

@ApiTags('燃料')
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
