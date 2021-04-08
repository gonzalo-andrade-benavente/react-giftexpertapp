
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe( 'Test useFetchGifs.test.js', () => {

    const category  = 'Hunter X'

    test( 'Should be return initial state', async () => {

        const { result, waitForNextUpdate} = renderHook( () => useFetchGifs( category ));
        const { data, loading } = result.current;

        await waitForNextUpdate(); 
        
        expect( data.length ).toBe( 0 );
        expect( loading ).toBe( true );

    });

    test( 'Should be return a not emoty array and loading false', async () => { 

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( category ));

        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 5 );
        expect( loading ).toBe( false );

    });


});