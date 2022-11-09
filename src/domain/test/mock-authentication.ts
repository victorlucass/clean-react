import { AuthenticationParams } from '../usecases/authentication'
import { internet } from 'faker'

export function mockAuthentication (): AuthenticationParams {
  return {
    email: internet.email(),
    password: internet.password()
  }
}
