import { AuthModule } from './auth/auth.module';
import { Module } from './core';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [
    AuthModule,
    DogsModule
  ]
})
export class AppModule {
}