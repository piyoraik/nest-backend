import { Module } from '@nestjs/common';
import { EndusersService } from './endusers.service';
import { EndusersController } from './endusers.controller';

@Module({
  providers: [EndusersService],
  controllers: [EndusersController]
})
export class EndusersModule {}
