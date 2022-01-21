import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
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
  @UseInterceptors()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of cats',
    type: CreateListingCarDTO,
  })
  create(
    @Body() body: CreateListingCarDTO,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    console.log(body);
    return this.listingCarService.create(body);
  }

  @Get(':id')
  findOneId(@Param('id') id: string) {
    return this.listingCarService.findOneId(+id);
  }
}
