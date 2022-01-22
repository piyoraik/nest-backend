import { Test, TestingModule } from '@nestjs/testing';
import { ImportedCarController } from './imported-car.controller';

describe('ImportedCarController', () => {
  let controller: ImportedCarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImportedCarController],
    }).compile();

    controller = module.get<ImportedCarController>(ImportedCarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
