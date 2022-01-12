import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuctionColorService } from './auction-color.service';
import { CreateAuctionColorDTO } from './dto/create-auctioncolor-dto';
import { UpdateAuctionColorDTO } from './dto/update-auctioncolor-dto';

@Controller('auction-color')
export class AuctionColorController {
  constructor(private readonly auctionColorService: AuctionColorService) {}

  @Get()
  fetchAll() {
    return this.auctionColorService.fetchAll();
  }

  @Post()
  create(@Body() body: CreateAuctionColorDTO) {
    return this.auctionColorService.create(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auctionColorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateAuctionColorDTO) {
    console.log(body);
    return this.auctionColorService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.auctionColorService.softDelete(+id);
  }
}
