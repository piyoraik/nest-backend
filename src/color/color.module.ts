import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorRepository } from './color.repository';
import { ColorService } from './color.service';

@Module({
  imports: [TypeOrmModule.forFeature([ColorRepository])],
  providers: [ColorService],
  exports: [ColorService]
})
export class ColorModule {}
