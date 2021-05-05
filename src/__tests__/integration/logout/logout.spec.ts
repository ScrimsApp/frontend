import requester from '../../requester';

describe('Logout User', () => {
  let testUserToken = '';

  test('Should logout the user', async () => {
    const response = await requester.post('auth/logout').set({
      Authorization: `Bearer ${testUserToken}`,
    });

    const { status } = response;

    expect(status).toBe(200);
  });
});
