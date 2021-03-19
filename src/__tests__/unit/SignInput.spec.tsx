/**
 * @jest-environment jsdom
 */

import { render } from '../testUtils';

import SignInput from '../../components/SignInput/SignInput.component';

describe('SignInput UI Tests', () => {
  let testProps;

  beforeEach(() => {
    testProps = {
      minWidth: '100%',
      colorType: 'primary',
      type: 'email',
      label: 'E-mail',
      name: 'email',
      value: 'test@test.com',
    };
  });

  test('Should render a input with name, label, type and value', async () => {
    const { findByText } = render(<SignInput {...testProps} />);

    const label = await findByText(testProps.label);

    expect(label).toBeVisible();
  });
});
