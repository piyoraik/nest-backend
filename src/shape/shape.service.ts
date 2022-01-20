import { Injectable } from '@nestjs/common';
import { ShapeRepository } from './shape.repository';

@Injectable()
export class ShapeService {
    constructor(
        private shapeRepository: ShapeRepository,
      ) {}
}
