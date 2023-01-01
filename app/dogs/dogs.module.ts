import { Module } from '~/core';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
  controllers: [DogsController],
  injectables: [DogsService]
})
export class DogsModule { }