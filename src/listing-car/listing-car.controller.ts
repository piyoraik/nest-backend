import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateCarBodyImageDTO } from 'src/car-body-image/dto/create.carbodyimage.dto';
import { CreateSalesPointDTO } from 'src/sales-point/dto/create-salespoint.dto';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';
import { ListingCarService } from './listing-car.service';

@Controller('listing-car')
export class ListingCarController {
  constructor(private readonly listingCarService: ListingCarService) {}

  @Get()
  fetchAll() {
    return this.listingCarService.findAll();
  }

  @Post()
  create(@Body() body: CreateListingCarDTO) {
    return this.listingCarService.create(body);
  }
}
