import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateImportedCarDTO } from './dto/create.imported-car.dto';
import { ImportedCarService } from './imported-car.service';

@Controller('imported-car')
export class ImportedCarController {
  constructor(private readonly importedCarService: ImportedCarService) {}

  @Get()
  findAll() {
    return this.importedCarService.findAll();
  }

  @Post()
  create(@Body() body: CreateImportedCarDTO) {
    return this.importedCarService.create(body);
  }

  @Get(':importedCarId')
  findOne(@Param('importedCarId') id: string) {
    return this.importedCarService.findOneID(+id);
  }
}
