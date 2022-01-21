import { Test, TestingModule } from '@nestjs/testing';
import { CarBodyImageController } from './car-body-image.controller';

describe('CarBodyImageController', () => {
  let controller: CarBodyImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarBodyImageController],
    }).compile();

    controller = module.get<CarBodyImageController>(CarBodyImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
