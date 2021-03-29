import { api } from '../../../config/api';
import { SignUpRequest } from '../../../types/requests/SignUpRequest.type';
import { signUpSchema } from '../../../utils/validation/signUp.schema';

describe('Sign Up Page', () => {
  let userInfo: SignUpRequest;

  beforeEach(() => {
    userInfo = {
      email: 'test@testing.com',
      name: 'test',
      password: '12345678',
      password_confirmation: '12345678',
    };
  });

  test('User info should be valid', async () => {
    let isValid = await signUpSchema.isValid(userInfo);

    expect(isValid).toBe(true);
  });

  test('Should sign up the user', async () => {
    let response = await api.post('auth/register', userInfo);

    const { status } = response;

    expect(status).toBe(201);
  });
});
