import { CoreAuthModule, Module } from '~/core';
import { AuthController } from './auth.controller';

/**
 * By registering CoreAuthModule, you can override any part of
 * the provided Auth functionality. Otherwise, just import CoreAuthModule
 * into the AppModule.
 */
@Module({
  imports: [
    CoreAuthModule.register({
      controller: AuthController
    })
  ]
})
export class AuthModule { }