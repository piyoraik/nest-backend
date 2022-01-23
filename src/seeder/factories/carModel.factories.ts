import { CarModel } from 'src/entity/car.model.entity';
import { define } from 'typeorm-seeding';

define(CarModel, (_, name: string): CarModel => {
  const carModel = new CarModel();
  carModel.name = name;

  return carModel;
});

export default CarModel;
