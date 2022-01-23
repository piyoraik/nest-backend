import { Fuel } from 'src/entity/fuel.entity';
import { define } from 'typeorm-seeding';

define(Fuel, (_, name: string): Fuel => {
  const fuel = new Fuel();
  fuel.name = name;

  return fuel;
});

export default Fuel;
