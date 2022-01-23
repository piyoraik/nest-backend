import { Factory, Seeder } from 'typeorm-seeding';
import AirConditioner from '../factories/airConditioner.factories';

export default class CreateAirConditioner implements Seeder {
  airConditioner = ['AC', 'AAC', 'WAC', 'C', 'なし'];

  public async run(factory: Factory) {
    await Promise.all(
      this.airConditioner.map(async (name) => {
        await factory(AirConditioner)(name).create();
      }),
    );
  }
}
