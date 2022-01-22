import { Test, TestingModule } from '@nestjs/testing';
import { AfterSuccessfulBidController } from './after-successful-bid.controller';

describe('AfterSuccessfulBidController', () => {
  let controller: AfterSuccessfulBidController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AfterSuccessfulBidController],
    }).compile();

    controller = module.get<AfterSuccessfulBidController>(AfterSuccessfulBidController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
