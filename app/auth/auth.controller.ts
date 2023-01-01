import { Controller, CoreAuthController, View, ViewBackend } from '~/core';
import Login from './views/Login';

@Controller('auth')
export class AuthController extends CoreAuthController {
  /**
   * Override provided login view like this
   */
  @View('login')
  readonly login = Login;

  /**
   * Override ViewBackend logic like this
   */
  @ViewBackend.Get('login')
  loginView() {
    return {};
  }

  // CoreAuthController implements all the registration/forgot password/etc
  // views and ViewBackends
}
