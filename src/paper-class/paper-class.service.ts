import { Injectable } from '@nestjs/common';
import { PaperClassRepository } from './paper-class.repository';

@Injectable()
export class PaperClassService {
  constructor(private readonly paperClassRepository: PaperClassRepository) {}
}
