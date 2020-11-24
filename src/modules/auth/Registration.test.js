import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Registration from './Registration';

describe('Registration screen',  () => {
  it('displays title', () => {
    render(<Registration />);
    const title = screen.getByText(/Registration/i);
    expect(title).toBeInTheDocument();
  });

  it('display errors', async () => {
    render(<Registration />);

    fireEvent.change(screen.getByTestId('name'), { target: { value: 'a' } })
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'a@ya.ru' } })
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'a' } })

    fireEvent.click(screen.getByTestId('submit'))

    await waitFor(() =>
      expect(screen.getAllByTestId('field-error').length).toBe(3),
      { timeout: 3000 }
    )
  });

  it('disables submit button', () => {
    render(<Registration />);
    fireEvent.click(screen.getByTestId('submit'));
    expect(screen.getByTestId('submit').disabled).toBe(true)
  });

  it('displays success flash', async () => {
    render(<Registration />);
    fireEvent.change(screen.getByTestId('name'), { target: { value: 'hack' } })
    fireEvent.change(screen.getByTestId('email'), { target: { value: 'hack@ya.ru' } })
    fireEvent.change(screen.getByTestId('password'), { target: { value: 'hack' } })
    fireEvent.click(screen.getByTestId('submit'));

    await waitFor(() =>
      screen.getByText('Win!'),
      { timeout: 3000 }
    )
  })
})

