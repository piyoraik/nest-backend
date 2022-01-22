import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CarBodyNumberService } from './car-body-number.service';
import {
  CreateCarBodyNumberDTO,
  CreateCarBodyNumberForeignKeyDTO,
} from './dto/create.car-body-number.dto';
import { ConvertIntPipe } from './pipe/convertInt.pipe';

@ApiTags('車体')
@Controller('car-body-number')
export class CarBodyNumberController {
  constructor(private readonly carBodyNumberService: CarBodyNumberService) {}

  @Get()
  fetchAll() {
    return this.carBodyNumberService.findAll();
  }

  @ApiProperty()
  @Post(':listingCarID')
  create(
    @Body() createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    @Param('listingCarID') listingCarId: string,
    @Query(ConvertIntPipe) foreignKey: CreateCarBodyNumberForeignKeyDTO,
  ) {
    return this.carBodyNumberService.create(
      createCarBodyNumberDTO,
      foreignKey,
      +listingCarId,
    );
  }
}
