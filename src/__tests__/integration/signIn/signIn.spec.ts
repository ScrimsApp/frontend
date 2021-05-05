import requester from '../../requester';

import { SignInRequest } from '../../../types/requests/SignInRequest.type';

import { signInSchema } from '../../../utils/validation/signIn.schema';

describe('Sign In Page', () => {
  let credentials: SignInRequest;

  beforeEach(() => {
    credentials = {
      email: 'test@test.com',
      password: '12345678',
    };
  });

  test('User credentials should be valid', async () => {
    let isValid = await signInSchema.isValid(credentials);

    expect(isValid).toBe(true);
  });

  test('Should sign in the user', async () => {
    const response = await requester.post('auth/login').send(credentials);

    const { status } = response;

    expect(status).toBe(200);
  });
});
