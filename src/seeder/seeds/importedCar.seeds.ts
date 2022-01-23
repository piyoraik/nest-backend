import { Factory, Seeder } from 'typeorm-seeding';
import ImportedCar from '../factories/importedCar.facroties';

export default class CreateImportedCar implements Seeder {
  importedCars = ['ディーラー車', '新並', '中並'];

  public async run(factory: Factory) {
    await Promise.all(
      this.importedCars.map(async (name) => {
        await factory(ImportedCar)(name).create();
      }),
    );
  }
}
