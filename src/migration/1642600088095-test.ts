import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1642600088095 implements MigrationInterface {
  name = 'test1642600088095';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` DROP FOREIGN KEY \`FK_a7b7aec4673bdfe52665dcf83e7\``,
    );
    await queryRunner.query(
      `DROP INDEX \`FK_d2db43d050aff54941675e9e068\` ON \`auction\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`membersIdId\` \`memberId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` DROP FOREIGN KEY \`FK_2dde0d3b7578fa9efd34530011a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` DROP FOREIGN KEY \`FK_1217d1626c9246d3d3fc4072f16\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`maker\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_model\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shape\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`fuel\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`color\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shift\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`gear\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`air_conditioner\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`imported_car\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`handle\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`air_back\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`delivery_method\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_997939f45114c96f4a2555254ec\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_2fed647037086f2c36767b34d30\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` CHANGE \`auctionListingIdId\` \`auctionListingIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` CHANGE \`deliveryIdId\` \`deliveryIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` DROP FOREIGN KEY \`FK_2172dcc355cdffb7356afe0cd7e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`auctionListingId\` \`auctionListingId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`memberId\` \`memberId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`admin\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_0305ef1292f0a3f041f36997079\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_9af7cee0702ba878af296ed0447\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_8e93d440de4d97e435fec36a964\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`auctionListingId\` \`auctionListingId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`membersIdId\` \`membersIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`adminIdId\` \`adminIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`members\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction\` CHANGE \`memberId\` \`memberId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase_management\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` DROP FOREIGN KEY \`FK_f2e5827846453775b6a249830a3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` CHANGE \`auctionListingId\` \`auctionListingId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_bc8f26acd4211433624463df083\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_e1f540ccaf832eb1e9199da3c0f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_4ffcbcc6f46a19410f9743c4c01\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_084a1091f10cb4865f42b071ee0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`auctionIdId\` \`auctionIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`purchaseManagementIdId\` \`purchaseManagementIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`membersIdId\` \`membersIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`carIdId\` \`carIdId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_ef0d8bc131a96c8f2d3b34a63ca\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_accbbfaa661f501335ddd0d5785\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_9a5f284969fb7e32293243121a0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_4feb29216d4422d1fd4f94bf2c2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_180ffc9311ca59ad163ff08a994\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_e676cd9b0c4e50a027b4dfc1b01\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_fe64ed233791e78baad2ff3d2c8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_c6c7c6d666dd528627990d66da2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_cff0b72594b85714fd669171bd6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_1135310798f15399cb432586c16\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_2c7f36d8435f2ec3c37ebde9cb5\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_1fbfcd66f575c22f39963cf8bf0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_21928fd4ca8f98a83110255d821\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`makerId\` \`makerId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`carModelId\` \`carModelId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`shapeId\` \`shapeId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`fuelId\` \`fuelId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`exteriorColorId\` \`exteriorColorId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`interiorColorId\` \`interiorColorId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`shiftId\` \`shiftId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`gearId\` \`gearId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`airConditonerId\` \`airConditonerId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`importedCarId\` \`importedCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`handleId\` \`handleId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`airBackId\` \`airBackId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`listing_car\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`addition\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`addition\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_evaluation\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_evaluation\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`exhibitor_entry\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`exhibitor_entry\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspection\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspection\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`paper_class\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`paper_class\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`suggested_listing\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`suggested_listing\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`testing_record\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`testing_record\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` ADD CONSTRAINT \`FK_2dde0d3b7578fa9efd34530011a\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` ADD CONSTRAINT \`FK_1217d1626c9246d3d3fc4072f16\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_997939f45114c96f4a2555254ec\` FOREIGN KEY (\`auctionListingIdId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_2fed647037086f2c36767b34d30\` FOREIGN KEY (\`deliveryIdId\`) REFERENCES \`delivery_method\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` ADD CONSTRAINT \`FK_2172dcc355cdffb7356afe0cd7e\` FOREIGN KEY (\`auctionListingId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` ADD CONSTRAINT \`FK_be1ebc34dbfbf84b66542707f68\` FOREIGN KEY (\`memberId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_0305ef1292f0a3f041f36997079\` FOREIGN KEY (\`auctionListingId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_9af7cee0702ba878af296ed0447\` FOREIGN KEY (\`membersIdId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_8e93d440de4d97e435fec36a964\` FOREIGN KEY (\`adminIdId\`) REFERENCES \`admin\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction\` ADD CONSTRAINT \`FK_d2db43d050aff54941675e9e068\` FOREIGN KEY (\`memberId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` ADD CONSTRAINT \`FK_f2e5827846453775b6a249830a3\` FOREIGN KEY (\`auctionListingId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_bc8f26acd4211433624463df083\` FOREIGN KEY (\`auctionIdId\`) REFERENCES \`auction\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_e1f540ccaf832eb1e9199da3c0f\` FOREIGN KEY (\`purchaseManagementIdId\`) REFERENCES \`purchase_management\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_4ffcbcc6f46a19410f9743c4c01\` FOREIGN KEY (\`membersIdId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_084a1091f10cb4865f42b071ee0\` FOREIGN KEY (\`carIdId\`) REFERENCES \`car_body_number\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_ef0d8bc131a96c8f2d3b34a63ca\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_accbbfaa661f501335ddd0d5785\` FOREIGN KEY (\`makerId\`) REFERENCES \`maker\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_9a5f284969fb7e32293243121a0\` FOREIGN KEY (\`carModelId\`) REFERENCES \`car_model\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_4feb29216d4422d1fd4f94bf2c2\` FOREIGN KEY (\`shapeId\`) REFERENCES \`shape\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_180ffc9311ca59ad163ff08a994\` FOREIGN KEY (\`fuelId\`) REFERENCES \`fuel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_e676cd9b0c4e50a027b4dfc1b01\` FOREIGN KEY (\`exteriorColorId\`) REFERENCES \`color\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_fe64ed233791e78baad2ff3d2c8\` FOREIGN KEY (\`interiorColorId\`) REFERENCES \`color\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_c6c7c6d666dd528627990d66da2\` FOREIGN KEY (\`shiftId\`) REFERENCES \`shift\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_cff0b72594b85714fd669171bd6\` FOREIGN KEY (\`gearId\`) REFERENCES \`gear\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_1135310798f15399cb432586c16\` FOREIGN KEY (\`airConditonerId\`) REFERENCES \`air_conditioner\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_2c7f36d8435f2ec3c37ebde9cb5\` FOREIGN KEY (\`importedCarId\`) REFERENCES \`imported_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_1fbfcd66f575c22f39963cf8bf0\` FOREIGN KEY (\`handleId\`) REFERENCES \`handle\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_21928fd4ca8f98a83110255d821\` FOREIGN KEY (\`airBackId\`) REFERENCES \`air_back\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`addition\` ADD CONSTRAINT \`FK_6bba9420d44b747f807ec7ea39d\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_evaluation\` ADD CONSTRAINT \`FK_7f8644ec4dade4bf316e04fbeb9\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`exhibitor_entry\` ADD CONSTRAINT \`FK_ec69fd75d7cb291fd48924d5ca8\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspection\` ADD CONSTRAINT \`FK_1578388d81cedbcd0fbc0039792\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`paper_class\` ADD CONSTRAINT \`FK_45bc506a655bd5bad5b204b1cdf\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`suggested_listing\` ADD CONSTRAINT \`FK_9966e1c7817743744a9a42301ca\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`testing_record\` ADD CONSTRAINT \`FK_6e2a2436decff29824f5094367a\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`testing_record\` DROP FOREIGN KEY \`FK_6e2a2436decff29824f5094367a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`suggested_listing\` DROP FOREIGN KEY \`FK_9966e1c7817743744a9a42301ca\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`paper_class\` DROP FOREIGN KEY \`FK_45bc506a655bd5bad5b204b1cdf\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspection\` DROP FOREIGN KEY \`FK_1578388d81cedbcd0fbc0039792\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`exhibitor_entry\` DROP FOREIGN KEY \`FK_ec69fd75d7cb291fd48924d5ca8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_evaluation\` DROP FOREIGN KEY \`FK_7f8644ec4dade4bf316e04fbeb9\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`addition\` DROP FOREIGN KEY \`FK_6bba9420d44b747f807ec7ea39d\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_21928fd4ca8f98a83110255d821\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_1fbfcd66f575c22f39963cf8bf0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_2c7f36d8435f2ec3c37ebde9cb5\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_1135310798f15399cb432586c16\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_cff0b72594b85714fd669171bd6\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_c6c7c6d666dd528627990d66da2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_fe64ed233791e78baad2ff3d2c8\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_e676cd9b0c4e50a027b4dfc1b01\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_180ffc9311ca59ad163ff08a994\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_4feb29216d4422d1fd4f94bf2c2\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_9a5f284969fb7e32293243121a0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_accbbfaa661f501335ddd0d5785\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` DROP FOREIGN KEY \`FK_ef0d8bc131a96c8f2d3b34a63ca\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_084a1091f10cb4865f42b071ee0\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_4ffcbcc6f46a19410f9743c4c01\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_e1f540ccaf832eb1e9199da3c0f\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` DROP FOREIGN KEY \`FK_bc8f26acd4211433624463df083\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` DROP FOREIGN KEY \`FK_f2e5827846453775b6a249830a3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction\` DROP FOREIGN KEY \`FK_d2db43d050aff54941675e9e068\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_8e93d440de4d97e435fec36a964\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_9af7cee0702ba878af296ed0447\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` DROP FOREIGN KEY \`FK_0305ef1292f0a3f041f36997079\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` DROP FOREIGN KEY \`FK_be1ebc34dbfbf84b66542707f68\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` DROP FOREIGN KEY \`FK_2172dcc355cdffb7356afe0cd7e\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_2fed647037086f2c36767b34d30\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` DROP FOREIGN KEY \`FK_997939f45114c96f4a2555254ec\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` DROP FOREIGN KEY \`FK_1217d1626c9246d3d3fc4072f16\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` DROP FOREIGN KEY \`FK_2dde0d3b7578fa9efd34530011a\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`testing_record\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`testing_record\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`suggested_listing\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`suggested_listing\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`paper_class\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`paper_class\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspection\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`inspection\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`exhibitor_entry\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`exhibitor_entry\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_evaluation\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_evaluation\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`addition\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`addition\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`listing_car\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`airBackId\` \`airBackId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`handleId\` \`handleId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`importedCarId\` \`importedCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`airConditonerId\` \`airConditonerId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`gearId\` \`gearId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`shiftId\` \`shiftId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`interiorColorId\` \`interiorColorId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`exteriorColorId\` \`exteriorColorId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`fuelId\` \`fuelId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`shapeId\` \`shapeId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`carModelId\` \`carModelId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`makerId\` \`makerId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_21928fd4ca8f98a83110255d821\` FOREIGN KEY (\`airBackId\`) REFERENCES \`air_back\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_1fbfcd66f575c22f39963cf8bf0\` FOREIGN KEY (\`handleId\`) REFERENCES \`handle\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_2c7f36d8435f2ec3c37ebde9cb5\` FOREIGN KEY (\`importedCarId\`) REFERENCES \`imported_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_1135310798f15399cb432586c16\` FOREIGN KEY (\`airConditonerId\`) REFERENCES \`air_conditioner\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_cff0b72594b85714fd669171bd6\` FOREIGN KEY (\`gearId\`) REFERENCES \`gear\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_c6c7c6d666dd528627990d66da2\` FOREIGN KEY (\`shiftId\`) REFERENCES \`shift\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_fe64ed233791e78baad2ff3d2c8\` FOREIGN KEY (\`interiorColorId\`) REFERENCES \`color\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_e676cd9b0c4e50a027b4dfc1b01\` FOREIGN KEY (\`exteriorColorId\`) REFERENCES \`color\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_180ffc9311ca59ad163ff08a994\` FOREIGN KEY (\`fuelId\`) REFERENCES \`fuel\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_4feb29216d4422d1fd4f94bf2c2\` FOREIGN KEY (\`shapeId\`) REFERENCES \`shape\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_9a5f284969fb7e32293243121a0\` FOREIGN KEY (\`carModelId\`) REFERENCES \`car_model\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_accbbfaa661f501335ddd0d5785\` FOREIGN KEY (\`makerId\`) REFERENCES \`maker\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_number\` ADD CONSTRAINT \`FK_ef0d8bc131a96c8f2d3b34a63ca\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`carIdId\` \`carIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`membersIdId\` \`membersIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`purchaseManagementIdId\` \`purchaseManagementIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`auctionIdId\` \`auctionIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_084a1091f10cb4865f42b071ee0\` FOREIGN KEY (\`carIdId\`) REFERENCES \`car_body_number\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_4ffcbcc6f46a19410f9743c4c01\` FOREIGN KEY (\`membersIdId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_e1f540ccaf832eb1e9199da3c0f\` FOREIGN KEY (\`purchaseManagementIdId\`) REFERENCES \`purchase_management\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_listing\` ADD CONSTRAINT \`FK_bc8f26acd4211433624463df083\` FOREIGN KEY (\`auctionIdId\`) REFERENCES \`auction\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` CHANGE \`auctionListingId\` \`auctionListingId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`price\` ADD CONSTRAINT \`FK_f2e5827846453775b6a249830a3\` FOREIGN KEY (\`auctionListingId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase_management\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction\` CHANGE \`memberId\` \`memberId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`members\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`adminIdId\` \`adminIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`membersIdId\` \`membersIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`auctionListingId\` \`auctionListingId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_8e93d440de4d97e435fec36a964\` FOREIGN KEY (\`adminIdId\`) REFERENCES \`admin\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_9af7cee0702ba878af296ed0447\` FOREIGN KEY (\`membersIdId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`purchase\` ADD CONSTRAINT \`FK_0305ef1292f0a3f041f36997079\` FOREIGN KEY (\`auctionListingId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`admin\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`memberId\` \`memberId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`auctionListingId\` \`auctionListingId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` ADD CONSTRAINT \`FK_2172dcc355cdffb7356afe0cd7e\` FOREIGN KEY (\`auctionListingId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` CHANGE \`deliveryIdId\` \`deliveryIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` CHANGE \`auctionListingIdId\` \`auctionListingIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_2fed647037086f2c36767b34d30\` FOREIGN KEY (\`deliveryIdId\`) REFERENCES \`delivery_method\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`after_successful_bid\` ADD CONSTRAINT \`FK_997939f45114c96f4a2555254ec\` FOREIGN KEY (\`auctionListingIdId\`) REFERENCES \`auction_listing\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`delivery_method\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`air_back\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`handle\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`imported_car\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`air_conditioner\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`gear\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shift\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`color\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`fuel\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`shape\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_model\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`maker\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` ADD CONSTRAINT \`FK_1217d1626c9246d3d3fc4072f16\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` ADD CONSTRAINT \`FK_2dde0d3b7578fa9efd34530011a\` FOREIGN KEY (\`listingCarId\`) REFERENCES \`listing_car\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` CHANGE \`memberId\` \`membersIdId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `CREATE INDEX \`FK_d2db43d050aff54941675e9e068\` ON \`auction\` (\`memberId\`)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`auction_situation\` ADD CONSTRAINT \`FK_a7b7aec4673bdfe52665dcf83e7\` FOREIGN KEY (\`membersIdId\`) REFERENCES \`members\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
