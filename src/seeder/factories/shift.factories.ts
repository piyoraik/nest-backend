import { Shift } from 'src/entity/shift.entity';
import { define } from 'typeorm-seeding';

define(Shift, (_, name: string): Shift => {
  const shift = new Shift();
  shift.name = name;

  return shift;
});

export default Shift;
