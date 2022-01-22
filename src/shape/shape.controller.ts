import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateShapeDTO } from './dto/create.shape.dto';
import { ShapeService } from './shape.service';

@ApiTags('形状')
@Controller('shape')
export class ShapeController {
  constructor(private readonly shapeService: ShapeService) {}

  @Get()
  findAll() {
    return this.shapeService.findAll();
  }

  @Post()
  create(@Body() body: CreateShapeDTO) {
    return this.shapeService.create(body);
  }

  @Get(':shapeId')
  findOne(@Param('shapeId') id: string) {
    return this.shapeService.findOneID(+id);
  }
}
