import { shallow } from "enzyme";
import AddCategory from '../../components/AddCategory';


describe( 'Test AddCategory.test.js', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> ); // Doble inicialización para poder ver la ayuda.

    beforeEach( () => {
        jest.clearAllMocks(); // Especial para funciones.
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test( 'Should be show the Component Correctly', async () => {
        expect( wrapper ).toMatchSnapshot;
    });

    test( 'Should be change input text', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate( 'change', { 
            target: { value } 
        });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });

    test( 'Should be not simulate Form Submmit', () => {
        /* wrapper.find('form').simulate('submit', {
            preventDefault = () => {}
        }); */
        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );
        expect ( setCategories ).not.toHaveBeenCalled();
    });

    test( 'Should be call setCategorias en clean input', () => {
        const value = 'Tarea del profe';

        wrapper.find('input').simulate('change', { target: { value } });

        wrapper.find('form').simulate( 'submit', { preventDefault(){} } );
        
        expect ( setCategories ).toHaveBeenCalled();
        expect ( setCategories ).toHaveBeenCalledTimes(1);
        expect ( setCategories ).toHaveBeenCalledWith( expect.any( Function ) ); //Cuyo parámetros de entrada sean función.

        expect ( wrapper.find('input').prop('value') ).toBe('');

    });


});