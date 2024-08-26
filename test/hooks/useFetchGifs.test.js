import { render, renderHook,  waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"




describe('Testing on <useFetchGifs>', () => {
  test('should return the inital status', () => {
    
    const { result } = renderHook( () => useFetchGifs('One Punch'));
    const { images, isLoading } = result.current
    //console.log(result);

    expect( images.length ).toBe(0);
    expect( isLoading ).toBeTruthy();
  });

  test('should return one images array and the isLoading = false, ergo, when changes status', async () => {
    
    const { result } = renderHook( () => useFetchGifs('One Punch'));

    // It's used in React hooks as long as being altered the initial status
    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );
    
    const { images, isLoading } = result.current
    //console.log(result);

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  })
  
})
