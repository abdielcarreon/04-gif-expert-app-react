import { render, screen, fireEvent } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"


describe('Testing on <GiftExpertApp/>', () => {
// Validations: Writing in the input value,
    // Actions in the form, taking snapshot, what happen to the form change, what happened if gives the same category again, what happened if I gives another different category and what happen in the HTML regard of that, etc.
  test('should to match snapshot', () => {
    render(<GiftExpertApp /> )
    const { container } = render(<GiftExpertApp /> )
    
    expect( container ).toMatchSnapshot();
  })
  
    
  test('should write in the input and set the value through the submit', () => {


    render(<GiftExpertApp /> )
    
    const inputValue = 'Saitama';
    const input = screen.getByRole('textbox');
    const form =screen.getByRole('form');
    
    fireEvent.input( input, { target: { value: inputValue }});
    fireEvent.submit(form)
    screen.debug();
    
    
  });
  
})
