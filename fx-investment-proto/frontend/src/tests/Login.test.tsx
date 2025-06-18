import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login';

it('calls onLogin', async () => {
  const user = userEvent.setup();
  let token = '';
  render(<Login onLogin={t => token = t} />);

  global.fetch = vi.fn().mockResolvedValue({
    json: () => ({ token: 'abc' })
  } as any);

  await user.type(screen.getByPlaceholderText('username'), 'a');
  await user.click(screen.getByRole('button', { name: /login/i }));

  expect(token).toBe('abc');
});
