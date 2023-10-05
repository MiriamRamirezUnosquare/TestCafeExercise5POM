import home from '../PageObjects/Home';

fixture `Home page`
    .page `https://www.amazon.com`;

test('Testing Search bar', async t => {
    
    const product = 'MacBook Pro'

    await t
        .maximizeWindow()
        .wait(15000)
        await home.submitProduct(product)
        await home.verify_searchResults()
        await home.verify_priceGreaterThanCero()

});