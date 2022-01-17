import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaperClassRepository } from './paper-class.repository';
import { PaperClassService } from './paper-class.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaperClassRepository])],
  providers: [PaperClassService],
})
export class PaperClassModule {}
