import { Controller, Get } from '@nestjs/common';
import { ListingCarService } from './listing-car.service';

@Controller('listing-car')
export class ListingCarController {
  constructor(private readonly listingCarService: ListingCarService) {}

  @Get()
  fetchAll() {
    return this.listingCarService.findAll();
  }
}
