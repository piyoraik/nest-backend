import { Controller } from '@nestjs/common';
import { CarBodyNumberService } from './car-body-number.service';

@Controller('car-body-number')
export class CarBodyNumberController {
  constructor(private readonly carBodyNumberService: CarBodyNumberService) {}

  fetchAll() {
    return this.carBodyNumberService.findAll();
  }

  create() {
    return this.carBodyNumberService.create()
  }
}
