import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1642600781947 implements MigrationInterface {
  name = 'test1642600781947';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`maker\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`car_model\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`shape\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`fuel\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`color\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`shift\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`gear\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`air_conditioner\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`imported_car\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`handle\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`air_back\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`auction_situation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`bidPrice\` int NOT NULL, \`bidTime\` datetime NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`auctionListingId\` int NULL, \`memberId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`adminId\` int NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`purchase\` (\`id\` int NOT NULL AUTO_INCREMENT, \`option\` tinyint NOT NULL, \`sealCertificate\` tinyint NOT NULL, \`seal\` tinyint NOT NULL, \`residentsCard\` tinyint NOT NULL, \`vehicleInspection\` tinyint NOT NULL, \`LiabilityInsurance\` tinyint NOT NULL, \`commission\` tinyint NOT NULL, \`commissionReturn\` tinyint NOT NULL, \`garageCertificate\` tinyint NOT NULL, \`deliveryMethod\` varchar(255) NOT NULL, \`paymentMethod\` varchar(255) NOT NULL, \`payment\` tinyint NOT NULL, \`delivery\` tinyint NOT NULL, \`cancel\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`auctionListingId\` int NULL, \`membersIdId\` int NULL, \`adminIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`members\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`companyName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`iconImage\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`malicuousFlag\` tinyint NOT NULL DEFAULT 0, \`creditCheck\` tinyint NOT NULL DEFAULT 0, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`auction\` (\`id\` int NOT NULL AUTO_INCREMENT, \`auctionName\` varchar(255) NOT NULL, \`auctionColor\` varchar(255) NOT NULL, \`subTitle\` varchar(255) NOT NULL, \`startTime\` datetime NOT NULL, \`selectionImg\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`memberId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`price\` (\`id\` int NOT NULL AUTO_INCREMENT, \`successfulBidPrice\` int NOT NULL, \`successfulbidCommission\` int NOT NULL, \`useCommission\` int NOT NULL, \`consumptionTax\` int NOT NULL, \`deliveryCommission\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`auctionListingId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`auction_listing\` (\`id\` int NOT NULL AUTO_INCREMENT, \`hammerPrice\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`auctionIdId\` int NULL, \`purchaseManagementIdId\` int NULL, \`membersIdId\` int NULL, \`carIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`car_body_number\` (\`id\` int NOT NULL AUTO_INCREMENT, \`doorNumber\` int NOT NULL, \`grade\` varchar(255) NOT NULL, \`format\` varchar(255) NOT NULL, \`engineSize\` int NOT NULL, \`modelYear\` int NOT NULL, \`colorNo\` int NOT NULL, \`carBodyNumber\` int NOT NULL, \`crewNumber\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, \`makerId\` int NULL, \`carModelId\` int NULL, \`shapeId\` int NULL, \`fuelId\` int NULL, \`exteriorColorId\` int NULL, \`interiorColorId\` int NULL, \`shiftId\` int NULL, \`gearId\` int NULL, \`airConditonerId\` int NULL, \`importedCarId\` int NULL, \`handleId\` int NULL, \`airBackId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`listing_car\` (\`id\` int NOT NULL AUTO_INCREMENT, \`evaluationPoint\` varchar(255) NOT NULL, \`cigarette\` varchar(255) NOT NULL, \`meterExchangeHistory\` varchar(255) NOT NULL, \`scratchEvaluation\` varchar(255) NOT NULL, \`CarHistory\` varchar(255) NOT NULL, \`carInspection\` varchar(255) NOT NULL, \`suggestedAmount\` int NOT NULL, \`mileage\` int NOT NULL, \`exterior\` int NOT NULL, \`interior\` int NOT NULL, \`IschangeColor\` int NOT NULL, \`suggestedListing\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`addition\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isPS\` tinyint NOT NULL, \`isPW\` tinyint NOT NULL, \`isAW\` tinyint NOT NULL, \`isSR\` tinyint NOT NULL, \`isBACK\` tinyint NOT NULL, \`isPEEL\` tinyint NOT NULL, \`isAB\` tinyint NOT NULL, \`isTV\` tinyint NOT NULL, \`isNAVI\` tinyint NOT NULL, \`isRSP\` tinyint NOT NULL, \`isCAS\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, UNIQUE INDEX \`REL_6bba9420d44b747f807ec7ea39\` (\`listingCarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`car_body_evaluation\` (\`id\` int NOT NULL AUTO_INCREMENT, \`left_f_tire\` varchar(255) NOT NULL, \`left_r_tire\` varchar(255) NOT NULL, \`right_f_tire\` varchar(255) NOT NULL, \`right_r_tire\` varchar(255) NOT NULL, \`spare_tire\` varchar(255) NOT NULL, \`f_bumper\` varchar(255) NOT NULL, \`left_f_fender\` varchar(255) NOT NULL, \`left_f_door\` varchar(255) NOT NULL, \`left_locker_panel\` varchar(255) NOT NULL, \`left_r_door\` varchar(255) NOT NULL, \`left_quarter\` varchar(255) NOT NULL, \`left_r_bumper\` varchar(255) NOT NULL, \`bonnet\` varchar(255) NOT NULL, \`f_under_aero_parts\` varchar(255) NOT NULL, \`f_glass\` varchar(255) NOT NULL, \`roof\` varchar(255) NOT NULL, \`r_glass\` varchar(255) NOT NULL, \`trunk\` varchar(255) NOT NULL, \`r_under_aero_parts\` varchar(255) NOT NULL, \`f_panel\` varchar(255) NOT NULL, \`right_fender\` varchar(255) NOT NULL, \`right_door\` varchar(255) NOT NULL, \`right_locker_panel\` varchar(255) NOT NULL, \`right_r_door\` varchar(255) NOT NULL, \`right_quarter\` varchar(255) NOT NULL, \`r_panel\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, UNIQUE INDEX \`REL_7f8644ec4dade4bf316e04fbeb\` (\`listingCarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`exhibitor_entry\` (\`id\` int NOT NULL AUTO_INCREMENT, \`repairHistory\` tinyint NOT NULL, \`jack\` tinyint NOT NULL, \`tool\` tinyint NOT NULL, \`text\` varchar(255) NOT NULL, \`recyclePrice\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, UNIQUE INDEX \`REL_ec69fd75d7cb291fd48924d5ca\` (\`listingCarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`inspection\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isPS\` tinyint NOT NULL, \`isPW\` tinyint NOT NULL, \`isAW\` tinyint NOT NULL, \`isSR\` tinyint NOT NULL, \`isBACK\` tinyint NOT NULL, \`isPEEL\` tinyint NOT NULL, \`isAB\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, UNIQUE INDEX \`REL_1578388d81cedbcd0fbc003979\` (\`listingCarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`paper_class\` (\`id\` int NOT NULL AUTO_INCREMENT, \`securityDocument\` tinyint NOT NULL, \`manual\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, UNIQUE INDEX \`REL_45bc506a655bd5bad5b204b1cd\` (\`listingCarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`suggested_listing\` (\`id\` int NOT NULL AUTO_INCREMENT, \`car\` varchar(255) NOT NULL, \`minivanCampWagon\` varchar(255) NOT NULL, \`vanTruck\` varchar(255) NOT NULL, \`ligthCar\` varchar(255) NOT NULL, \`dressUp\` varchar(255) NOT NULL, \`importedCar\` varchar(255) NOT NULL, \`refresh\` varchar(255) NOT NULL, \`sellout\` varchar(255) NOT NULL, \`firstNg\` varchar(255) NOT NULL, \`reverse\` varchar(255) NOT NULL, \`largeSize\` varchar(255) NOT NULL, \`recycling\` varchar(255) NOT NULL, \`orange\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, UNIQUE INDEX \`REL_9966e1c7817743744a9a42301c\` (\`listingCarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`testing_record\` (\`id\` int NOT NULL AUTO_INCREMENT, \`repaired\` varchar(255) NOT NULL, \`jack\` varchar(255) NOT NULL, \`tool\` varchar(255) NOT NULL, \`text\` varchar(255) NOT NULL, \`recycling\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`listingCarId\` int NULL, UNIQUE INDEX \`REL_6e2a2436decff29824f5094367\` (\`listingCarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` CHANGE \`listingCarId\` \`listingCarId\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`delivery_method\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
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
      `ALTER TABLE \`purchase_management\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
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
      `ALTER TABLE \`purchase_management\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
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
      `ALTER TABLE \`delivery_method\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`car_body_image\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`sales_point\` CHANGE \`listingCarId\` \`listingCarId\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_6e2a2436decff29824f5094367\` ON \`testing_record\``,
    );
    await queryRunner.query(`DROP TABLE \`testing_record\``);
    await queryRunner.query(
      `DROP INDEX \`REL_9966e1c7817743744a9a42301c\` ON \`suggested_listing\``,
    );
    await queryRunner.query(`DROP TABLE \`suggested_listing\``);
    await queryRunner.query(
      `DROP INDEX \`REL_45bc506a655bd5bad5b204b1cd\` ON \`paper_class\``,
    );
    await queryRunner.query(`DROP TABLE \`paper_class\``);
    await queryRunner.query(
      `DROP INDEX \`REL_1578388d81cedbcd0fbc003979\` ON \`inspection\``,
    );
    await queryRunner.query(`DROP TABLE \`inspection\``);
    await queryRunner.query(
      `DROP INDEX \`REL_ec69fd75d7cb291fd48924d5ca\` ON \`exhibitor_entry\``,
    );
    await queryRunner.query(`DROP TABLE \`exhibitor_entry\``);
    await queryRunner.query(
      `DROP INDEX \`REL_7f8644ec4dade4bf316e04fbeb\` ON \`car_body_evaluation\``,
    );
    await queryRunner.query(`DROP TABLE \`car_body_evaluation\``);
    await queryRunner.query(
      `DROP INDEX \`REL_6bba9420d44b747f807ec7ea39\` ON \`addition\``,
    );
    await queryRunner.query(`DROP TABLE \`addition\``);
    await queryRunner.query(`DROP TABLE \`listing_car\``);
    await queryRunner.query(`DROP TABLE \`car_body_number\``);
    await queryRunner.query(`DROP TABLE \`auction_listing\``);
    await queryRunner.query(`DROP TABLE \`price\``);
    await queryRunner.query(`DROP TABLE \`auction\``);
    await queryRunner.query(`DROP TABLE \`members\``);
    await queryRunner.query(`DROP TABLE \`purchase\``);
    await queryRunner.query(`DROP TABLE \`admin\``);
    await queryRunner.query(`DROP TABLE \`auction_situation\``);
    await queryRunner.query(`DROP TABLE \`air_back\``);
    await queryRunner.query(`DROP TABLE \`handle\``);
    await queryRunner.query(`DROP TABLE \`imported_car\``);
    await queryRunner.query(`DROP TABLE \`air_conditioner\``);
    await queryRunner.query(`DROP TABLE \`gear\``);
    await queryRunner.query(`DROP TABLE \`shift\``);
    await queryRunner.query(`DROP TABLE \`color\``);
    await queryRunner.query(`DROP TABLE \`fuel\``);
    await queryRunner.query(`DROP TABLE \`shape\``);
    await queryRunner.query(`DROP TABLE \`car_model\``);
    await queryRunner.query(`DROP TABLE \`maker\``);
  }
}
