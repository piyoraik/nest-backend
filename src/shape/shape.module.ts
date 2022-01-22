import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { ShapeRepository } from './shape.repository';
import { ShapeService } from './shape.service';
import { ShapeController } from './shape.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShapeRepository])],
  providers: [ShapeService],
  exports: [ShapeService],
  controllers: [ShapeController],
})
export class ShapeModule {}
