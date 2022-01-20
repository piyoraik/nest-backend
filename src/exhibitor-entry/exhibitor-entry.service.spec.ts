import { Test, TestingModule } from '@nestjs/testing';
import { ExhibitorEntryService } from './exhibitor-entry.service';

describe('ExhibitorEntryService', () => {
  let service: ExhibitorEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExhibitorEntryService],
    }).compile();

    service = module.get<ExhibitorEntryService>(ExhibitorEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
