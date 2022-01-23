import { Factory, Seeder } from 'typeorm-seeding';
import AirBack from '../factories/airBack.factories';

export default class CreateAirBack implements Seeder {
  airBacks = ['シングル', 'ダブル'];

  public async run(factory: Factory) {
    await Promise.all(
      this.airBacks.map(async (name) => {
        await factory(AirBack)(name).create();
      }),
    );
  }
}
