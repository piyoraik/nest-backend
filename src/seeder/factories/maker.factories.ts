import { Maker } from 'src/entity/maker.entity';
import { define } from 'typeorm-seeding';

define(Maker, (_, name: string): Maker => {
  const maker = new Maker();
  maker.name = name;

  return maker;
});

export default Maker;
