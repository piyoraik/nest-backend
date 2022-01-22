import { Test, TestingModule } from '@nestjs/testing';
import { AirConditionerController } from './air-conditioner.controller';

describe('AirConditionerController', () => {
  let controller: AirConditionerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirConditionerController],
    }).compile();

    controller = module.get<AirConditionerController>(AirConditionerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
