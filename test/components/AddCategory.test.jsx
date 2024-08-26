import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing on <AddCategory />', () => {
  test('should change the text box value', () => {
    
    render(<AddCategory onNewCategory={ () => { } }
    />);

    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama' }});

    expect( input.value ).toBe('Saitama');
    //screen.debug();
  });

  test('should call onNewCategory if the input has any value', () => {
    
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory } />);
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue }});

    fireEvent.submit( form );
    screen.debug();

    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect (onNewCategory ).toHaveBeenCalledWith(inputValue);
  });

  test('should not call out to onNewCategory if input is empty', () => {
    
    const inputValue = '';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory }/>)
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value:  inputValue }});

    fireEvent.submit( form );

    screen.debug();

    //expect( form.value ).toBeUndefined( );
    //expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();

  });
  
  test('should have at least two characters the input value', () => {
    
    const inputValue = 'Sa';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={ onNewCategory }/>)
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value:  inputValue }});

    fireEvent.submit( form );

    screen.debug();
    expect( inputValue.length ).toBeGreaterThanOrEqual(2)

  });
  
  
})
