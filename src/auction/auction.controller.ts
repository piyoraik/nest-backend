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
import { GetMember } from 'src/auth/decorator/member.decorator';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { Members } from 'src/entity/member.entity';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Get()
  fetchAll(@GetMember() member: any) {
    console.log(member);
    return this.auctionService.fetchAll();
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() body: CreateAuctionDto,
    @GetMember() member: Pick<PayLoad, 'email'>,
  ) {
    return this.auctionService.create(body, member);
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
