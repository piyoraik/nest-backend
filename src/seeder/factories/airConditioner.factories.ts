import { AirConditioner } from 'src/entity/air.conditioner.entity';
import { define } from 'typeorm-seeding';

define(AirConditioner, (_, name: string): AirConditioner => {
  const airConditioner = new AirConditioner();
  airConditioner.name = name;

  return airConditioner;
});

export default AirConditioner;
