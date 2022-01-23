import { AirBack } from 'src/entity/air.back.entity';
import { define } from 'typeorm-seeding';

define(AirBack, (_, name: string): AirBack => {
  const airBack = new AirBack();
  airBack.name = name;

  return airBack;
});

export default AirBack;
