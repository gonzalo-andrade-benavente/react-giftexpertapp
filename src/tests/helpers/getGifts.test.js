import { getGifs } from '../../helpers/getGifs';

describe( 'Test getGifts.test.js', () => {

    test( 'should be back five elements', async () => {
        const gifts = await getGifs('One Punch');
        expect( gifts.length ).toBe( 5 );
    });

    test( 'should be 0 if no parameters ', async () => {
        const gifts = await getGifs('');
        expect( gifts.length ).toBe( 0 );
    });


});