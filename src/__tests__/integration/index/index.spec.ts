import requester from '../../requester';

describe('Index Page', () => {
  test('Should get created matches', async () => {
    const response = await requester.get('match').then((data) => data.body);

    let singleMatch = response.find((match) => match.id === 1);
    let multipleMatches = [response[0], response[1]];

    expect(singleMatch).toHaveProperty('id');
    expect(multipleMatches).toHaveLength(2);
  });

  test('Should get created matches using search filter', () => {
    // TO DO
  });
});
