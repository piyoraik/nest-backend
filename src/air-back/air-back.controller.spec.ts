import { Test, TestingModule } from '@nestjs/testing';
import { AirBackController } from './air-back.controller';

describe('AirBackController', () => {
  let controller: AirBackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirBackController],
    }).compile();

    controller = module.get<AirBackController>(AirBackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
