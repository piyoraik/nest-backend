import { Auction } from '../entity/auction.entity';
import { Repository } from 'typeorm';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';

describe('CatsController', () => {
  let catsController: AuctionController;
  let catsService: AuctionService;

  beforeEach(() => {
    catsService = new AuctionService(new Repository<Auction>());
    catsController = new AuctionController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      let result: any;
      jest.spyOn(catsService, 'fetchAll').mockImplementation(() => result);

      expect(await catsController.fetchAll()).toBe(result);
    });
  });
});
