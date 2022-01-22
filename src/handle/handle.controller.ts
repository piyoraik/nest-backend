import { Controller, Get } from '@nestjs/common';
import { HandleService } from './handle.service';

@Controller('handle')
export class HandleController {
  constructor(private readonly handleService: HandleService){}

  @Get()
  findAll() {
    return this.handleService.findAll()
  }

  // @
}
