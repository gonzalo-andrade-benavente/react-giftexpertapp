import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertaApp';


describe( 'Test GifExpertApp.test.js', () => {

    test( 'Should be show the Component Correctly', () => {

        const wrapper = shallow( <GifExpertApp />);
        expect(wrapper).toMatchSnapshot();

    });

});