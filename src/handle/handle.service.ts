import { Injectable } from '@nestjs/common';
import { HandleRepository } from './handle.repository';

@Injectable()
export class HandleService {
  constructor(private handleRepository: HandleRepository) {}
}
