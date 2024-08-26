import { getGifs } from "../../src/helpers/getGifs";


describe('Testing on getGifs', () => {

  
  test('should return a gifs array', async() => {
    
    const gifs = await getGifs('One Punch');
    
    const url = gifs[0].url;
    

    expect( gifs.length ).toBeGreaterThan( 0 );
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    });
    expect(url).toContain('https');
    
  });
  
});
