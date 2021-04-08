import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe( 'Test GifGridItem.test.js', () => {

    const title = 'Soy un título';
    const url = 'https://rutadeprueba/images.js';
    const wrapper = shallow( <GifGridItem title={ title } img={ url }/> );

    test( 'Should be show the Component Correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test( 'Should be a text in markup <p></p>', () => {
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );
    });

    test( 'Should be a image with url an alt property', () => {
        const img = wrapper.find( 'img' );
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test( 'Should be a effect from css animate__bounce', () => {
        const div = wrapper.find('div');
        expect( div.prop('className').includes('animate__bounce') ).toBe( true );

    });

});