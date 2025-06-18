import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Converter from '../components/Converter';

it('shows result', async () => {
  const user = userEvent.setup();
  render(<Converter token="t" />);

  global.fetch = vi.fn().mockResolvedValue({
    json: () => ({ result: 2 })
  } as any);

  await user.click(screen.getByRole('button', { name: /convert/i }));
  expect(await screen.findByText('2')).toBeInTheDocument();
});
