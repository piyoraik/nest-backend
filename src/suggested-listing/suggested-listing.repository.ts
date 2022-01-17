import { SuggestedListing } from 'src/entity/suggested.listing.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(SuggestedListing)
export class SuggestedListingRepository extends Repository<SuggestedListing> {}
