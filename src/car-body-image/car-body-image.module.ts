import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyImageRepository } from './car-body-image.repository';
import { CarBodyImageService } from './car-body-image.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarBodyImageRepository])],
  providers: [CarBodyImageService],
})
export class CarBodyImageModule {}
