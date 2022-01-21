import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyImageRepository } from './car-body-image.repository';
import { CarBodyImageService } from './car-body-image.service';
import { CarBodyImageController } from './car-body-image.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CarBodyImageRepository])],
  providers: [CarBodyImageService],
  exports: [CarBodyImageService],
  controllers: [CarBodyImageController],
})
export class CarBodyImageModule {}
