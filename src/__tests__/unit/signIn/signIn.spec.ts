import { api } from '../../../config/api';
import { SignInRequest } from '../../../types/requests/SignInRequest.type';
import { SignInResponse } from '../../../types/responses/SignInResponse.type';

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
    const response = await api.post<SignInResponse>('/auth/login', credentials);

    const { status } = response;

    expect(status).toBe(200);
  });
});
