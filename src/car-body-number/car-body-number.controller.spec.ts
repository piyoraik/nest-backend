import { Test, TestingModule } from '@nestjs/testing';
import { CarBodyNumberController } from './car-body-number.controller';

describe('CarBodyNumberController', () => {
  let controller: CarBodyNumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarBodyNumberController],
    }).compile();

    controller = module.get<CarBodyNumberController>(CarBodyNumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
