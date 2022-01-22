import { Test, TestingModule } from '@nestjs/testing';
import { HandleController } from './handle.controller';

describe('HandleController', () => {
  let controller: HandleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HandleController],
    }).compile();

    controller = module.get<HandleController>(HandleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
