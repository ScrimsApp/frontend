/**
 * @jest-environment jsdom
 */
import { render } from '../../testUtils';

import MatchCard from '../../../components/MatchCard/MatchCard.component';

describe('Match Card UI', () => {
  let testProps;

  beforeAll(() => {
    testProps = {
      id: 1,
      teamImage:
        'https://image.freepik.com/vetores-gratis/hacker-team-esport-logo_177315-79.jpg',
      title: 'Test Team',
      description: 'The team of testers',
      hashtags: ['test', 'md10'],
      time: '9:00',
      date: '15:00',
      captain: true,
    };
  });

  test('Should render a valid Match Card', async () => {
    const { findByText, debug } = render(<MatchCard {...testProps} />);

    debug();

    const title = await findByText(testProps.title);

    expect(title).toBeVisible();
    expect(title.innerHTML).toBe(testProps.title);
  });
});
