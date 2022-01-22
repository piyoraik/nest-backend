import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGearDTO } from './dto/create.gear.dto';
import { GearService } from './gear.service';

@ApiTags('ギア')
@Controller('gear')
export class GearController {
  constructor(private readonly gearService: GearService) {}

  @Get()
  findAll() {
    return this.gearService.findAll();
  }

  @Post()
  create(@Body() body: CreateGearDTO) {
    return this.gearService.create(body);
  }

  @Get(':gearId')
  findOne(@Param('gearId') id: string) {
    return this.gearService.findOneID(+id);
  }
}
