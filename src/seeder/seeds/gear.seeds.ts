import { Factory, Seeder } from 'typeorm-seeding';
import Gear from '../factories/gear.factories';

export default class CreateGear implements Seeder {
  gears = ['AT', '1速', '2速', '3速', '4速', '5速'];

  public async run(factory: Factory) {
    await Promise.all(
      this.gears.map(async (name) => {
        await factory(Gear)(name).create();
      }),
    );
  }
}
