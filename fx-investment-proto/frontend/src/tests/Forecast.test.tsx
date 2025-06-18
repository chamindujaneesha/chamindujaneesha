import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Forecast from '../components/Forecast';

it('renders chart after forecast', async () => {
  const user = userEvent.setup();
  render(<Forecast token="t" />);

  global.fetch = vi.fn().mockResolvedValue({
    json: () => ({ min: 1, likely: 2, max: 3 })
  } as any);

  await user.click(screen.getByRole('button', { name: /forecast/i }));
  expect(await screen.findByText('Likely')).toBeInTheDocument();
});
