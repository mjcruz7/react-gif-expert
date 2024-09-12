import { useFetchGifs } from '../hooks/UseFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            { 
                isLoading && <h2>Cargando...</h2>
            }
            <h3>{ category }</h3>
            <div className='card-grid'>
                {
                    images.map(img => <GifGridItem key={img.id} {...img} />) 
                }
            </div>
        </>
    )
}