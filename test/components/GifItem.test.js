import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"



describe('Testing on <GiftItem />', () => {

  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg'
  test('should to match snapshot', () => {
    
      const { container } = render(< GifItem title={ title } url= { url } />)
    
      expect( container ).toMatchSnapshot();

  });

  test('should show the image with url and alt indicated', () => {
    
    const { container } = render(< GifItem title={ title } url= { url } />)

    //screen.debug();

    // expect(screen.getByRole('img').src).toBe( url );

    // expect(screen.getByRole('alt').src).toBe( title );

    const { src, alt } = screen.getByRole('img')

    expect( src ).toBe( url )
    expect( alt ).toBe( title )
  });

  test('should show the title in the component', () => {
    
    const { container } = render(< GifItem title={ title } url= { url } />);

    expect( screen.getByText( title ) ).toBeTruthy();

  })
  
});
