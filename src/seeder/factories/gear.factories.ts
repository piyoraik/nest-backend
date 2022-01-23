import { Gear } from 'src/entity/gear.entity';
import { define } from 'typeorm-seeding';

define(Gear, (_, name: string): Gear => {
  const gear = new Gear();
  gear.name = name;

  return gear;
});

export default Gear;
