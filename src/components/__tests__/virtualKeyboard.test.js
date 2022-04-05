import { fireEvent, render, screen } from '@testing-library/react';
import VirtualKeyboard from '../VirtualKeyboard';

it('test onClick', () => {
  const mockCallback = jest.fn();
  render(<VirtualKeyboard handleKeydown={mockCallback}/>)
  
  fireEvent.click(screen.getByTestId('up'))
  fireEvent.click(screen.getByTestId('left'))
  fireEvent.click(screen.getByTestId('right'))
  fireEvent.click(screen.getByTestId('down'))

  expect(mockCallback).toHaveBeenCalledWith('ArrowUp')
  expect(mockCallback).toHaveBeenCalledWith('ArrowLeft')
  expect(mockCallback).toHaveBeenCalledWith('ArrowRight')
  expect(mockCallback).toHaveBeenCalledWith('ArrowDown')
})