import { Factory, Seeder } from 'typeorm-seeding';
import Fuel from '../factories/fuel.factories';

export default class CreateFuel implements Seeder {
  fuels = ['ハイオクガソリン', 'レギュラーガソリン', '軽油'];

  public async run(factory: Factory) {
    await Promise.all(
      this.fuels.map(async (name) => {
        await factory(Fuel)(name).create();
      }),
    );
  }
}
