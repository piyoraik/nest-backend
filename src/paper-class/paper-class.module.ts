import { Module } from '@nestjs/common';
import { PaperClassService } from './paper-class.service';

@Module({
  providers: [PaperClassService]
})
export class PaperClassModule {}
