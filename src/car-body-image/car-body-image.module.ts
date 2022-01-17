import { Module } from '@nestjs/common';
import { CarBodyImageService } from './car-body-image.service';

@Module({
  providers: [CarBodyImageService]
})
export class CarBodyImageModule {}
