/**
 * @jest-environment jsdom
 */

import { render } from '../../testUtils';

import SignInput from '../../../components/SignInput/SignInput.component';

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
    const { findByText, findByDisplayValue, debug } = render(
      <SignInput {...testProps} />
    );

    debug();

    const label = await findByText(testProps.label);
    const input = await findByDisplayValue(testProps.value);

    expect(input).toHaveAttribute('name', 'email');
    expect(label).toBeVisible();
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveValue(testProps.value);
  });
});
