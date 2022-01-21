import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { CarBodyNumberService } from './car-body-number.service';
import { CreateCarBodyNumberDTO } from './dto/create.car-body-number.dto';

@Controller('car-body-number')
export class CarBodyNumberController {
  constructor(private readonly carBodyNumberService: CarBodyNumberService) {}

  @Get()
  fetchAll() {
    return this.carBodyNumberService.findAll();
  }

  @ApiProperty({ required: true })
  @Post(':listingCarID')
  create(
    @Body() createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    @Param('listingCarID') id: string,
  ) {
    return this.carBodyNumberService.create(createCarBodyNumberDTO, +id);
  }
}
