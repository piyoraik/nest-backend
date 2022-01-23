import { ImportedCar } from 'src/entity/imported.car.entity';
import { define } from 'typeorm-seeding';

define(ImportedCar, (_, name: string): ImportedCar => {
  const importedCar = new ImportedCar();
  importedCar.name = name;

  return importedCar;
});

export default ImportedCar;
