import { Factory, Seeder } from 'typeorm-seeding';
import Shift from '../factories/shift.factories';

export default class CreateCarModel implements Seeder {
  shifts = ['フロアシフト', 'コラムシフト', 'インパネシフト'];

  public async run(factory: Factory) {
    await Promise.all(
      this.shifts.map(async (name) => {
        await factory(Shift)(name).create();
      }),
    );
  }
}
