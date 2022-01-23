import { Handle } from 'src/entity/handle.entity';
import { define } from 'typeorm-seeding';

define(Handle, (_, name: string): Handle => {
  const handle = new Handle();
  handle.name = name;

  return handle;
});

export default Handle;
