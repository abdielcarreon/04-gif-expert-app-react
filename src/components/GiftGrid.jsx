
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import  PropTypes  from 'prop-types';

export const GiftGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs( category );

    console.log({ images, isLoading });
    

    return (
        <>
            <h3>{ category } </h3>
            {
                isLoading && ( <h2>Loading...</h2> )
            }
            

            <div className='card-grid'>
                {
                    images.map( ( image ) => (
                        <GifItem key={ image.id }  
                        { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired
}