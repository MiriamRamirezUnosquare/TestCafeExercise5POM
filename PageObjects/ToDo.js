import { Selector, t } from 'testcafe';

class Page {
    constructor () {
        this.goToYourOrdersLink = Selector('a').withExactText('Go to Your Orders')
        this.helpLibrary_SearchInput = Selector('#hubHelpSearchInput')
        this.whereIsMyStuffSection = Selector('h1').withExactText('Where\'s My Stuff?')
    }

    async helpLibrary_Search(search){
        await t
        .typeText(this.helpLibrary_SearchInput, search)
        .pressKey('enter')
    }

    async verify_goToYourOrder_isPresent(){
        await t
        .expect(this.goToYourOrdersLink.visible).ok({timeout:5000}, 'Assert "Go to Your Order" is present')

    }

    async verify_whereIsMyStuff_isPresent(){
        await t
        .expect(this.whereIsMyStuffSection.visible).ok({timeout:5000}, 'Assert "Where\'s My Stuff" is present')
    }

}

export default new Page();