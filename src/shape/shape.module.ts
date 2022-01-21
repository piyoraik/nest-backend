import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { ShapeRepository } from './shape.repository';
import { ShapeService } from './shape.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShapeRepository])],
  providers: [ShapeService],
  exports: [ShapeService],
})
export class ShapeModule {}
