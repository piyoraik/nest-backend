import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Get()
  fetchAll() {
    return this.auctionService.fetchAll();
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() body: CreateAuctionDto) {
    console.log('fdsafs');
    // return this.auctionService.create(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auctionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateAuctionDto) {
    return this.auctionService.update(+id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.auctionService.softDelete(+id);
  }
}
