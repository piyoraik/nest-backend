import { Injectable } from '@nestjs/common';
import { SalesPointRepository } from './sales-point.repository';

@Injectable()
export class SalesPointService {
  constructor(private readonly salesPointRepository: SalesPointRepository) {}
}
