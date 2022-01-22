import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateShiftDTO } from './dto/create.shift.dto';
import { ShiftService } from './shift.service';

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {}

  @Get()
  findAll() {
    return this.shiftService.findAll();
  }

  @Post()
  create(@Body() body: CreateShiftDTO) {
    return this.shiftService.create(body);
  }

  @Get(':shiftId')
  findOne(@Param('shiftId') id: string) {
    return this.shiftService.findOneID(+id);
  }
}
