import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  @Get(':id')
  findOneId(@Param('id') id: string) {
    return this.listingCarService.findOneId(+id);
  }
}
