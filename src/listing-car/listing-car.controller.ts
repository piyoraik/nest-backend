import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, PartialType } from '@nestjs/swagger';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';
import { UpdateListingCarDTO } from './dto/update.listing-car.dto';
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

  @ApiQuery({ type: PartialType(CreateListingCarDTO), required: false })
  @Get('search')
  search(@Query() attrs: Partial<ListingCar>) {
    return this.listingCarService.findWhere(attrs);
  }

  @Get(':listingCarID')
  findOneId(@Param('listingCarID') id: string) {
    return this.listingCarService.findOneId(+id);
  }

  @Patch(':listingCarID')
  update(@Param('listingCarID') id: string, @Body() body: UpdateListingCarDTO) {
    return this.listingCarService.update(+id, body);
  }

  @Delete(':listingCarID')
  delete(@Param('listingCar') id: string) {
    return this.listingCarService.delete(+id);
  }
}
