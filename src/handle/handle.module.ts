import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { HandleRepository } from './handle.repository';
import { HandleService } from './handle.service';
import { HandleController } from './handle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HandleRepository])],
  providers: [HandleService],
  exports: [HandleService],
  controllers: [HandleController],
})
export class HandleModule {}
