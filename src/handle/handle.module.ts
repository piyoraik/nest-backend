import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HandleRepository } from './handle.repository';
import { HandleService } from './handle.service';

@Module({
  imports: [TypeOrmModule.forFeature([HandleRepository])],
  providers: [HandleService],
  exports: [HandleService]
})
export class HandleModule {}
