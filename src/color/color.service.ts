import { Injectable } from '@nestjs/common';
import { ColorRepository } from './color.repository';

@Injectable()
export class ColorService {
    constructor(
        private colorRepository: ColorRepository,
      ) {}
}
