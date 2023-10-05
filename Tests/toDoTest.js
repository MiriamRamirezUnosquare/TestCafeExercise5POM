import home from '../PageObjects/Home';
import toDo from '../PageObjects/ToDo';

fixture `Home page`
    .page `https://www.amazon.com`;

test('Testing To Do', async t => {

    const search = 'Tracking'
    
    await t
    .maximizeWindow()
    .wait(15000)
    await home.hamburgerMenu_Click()
    await home.menu_CustomerServiceOpt_Click()
    await toDo.helpLibrary_Search(search)
    await toDo.verify_whereIsMyStuff_isPresent()
    await toDo.verify_goToYourOrder_isPresent()

});