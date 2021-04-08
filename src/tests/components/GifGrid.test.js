import { shallow } from 'enzyme';
import GifGrid from '../../components/GiftGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test GifGrid.test.js', () => {

    const category = 'Naruto';

    test('Should be show the Component Correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should be show Items with the function useFetchGifs', () => {

        const gifs = [
            {
                id: 123456,
                title: 'img.title',
                img: 'https://img.images?.downsized_medium.url'

            },  {
                id: 1234567,
                title: 'img.title',
                img: 'https://img.images?.downsized_medium.url'

            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        
        //expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GiftGridItem').length ).toBe( gifs.length );

    });



});