import { Factory, Seeder } from 'typeorm-seeding';
import Handle from '../factories/handle.factories';

export default class CreateHandle implements Seeder {
  handles = ['右Ｈ', '左Ｈ'];

  public async run(factory: Factory) {
    await Promise.all(
      this.handles.map(async (name) => {
        await factory(Handle)(name).create();
      }),
    );
  }
}
