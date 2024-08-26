

import { render, screen } from "@testing-library/react";
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// It's used in React hooks as long as being the initial status
jest.mock('../../src/hooks/useFetchGifs');


describe('Testing on <GifGrid /> ', () => {

  const category = 'One Punch';

  test('should show the loading at first', () => {
    
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    });

    render(<GiftGrid category= { category } />)
    //screen.debug();

    expect(screen.getByText( 'Loading...' ));
    expect(screen.getByText( category ));
  });
  
  test('should shoe items when the images are loaded through useFetchGifs', () => {

    const gifs = [
      {
        id: '1',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg'
      },
      {
        id: '2',
        title: 'DB',
        url: 'https://localhost/db.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    });

    render(<GiftGrid category= { category } />)
    //screen.debug();

    expect( screen.getAllByRole('img').length).toBe(2);
  })
  
})
