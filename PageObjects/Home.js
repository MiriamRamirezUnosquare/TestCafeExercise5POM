import { Selector, t } from 'testcafe';
import XpathSelector from '../Resources/xpath-selector'

class Page {
    constructor () {
        this.hamburgerMenu = Selector('#nav-hamburger-menu')
        this.menu_CustomerServiceOpt = Selector('#hmenu-content a').withExactText('Customer Service')
        this.priceFirstElement = XpathSelector('//div[@data-component-type="s-search-result"][1]//span[@class="a-offscreen"]')
        this.resultProducts = Selector('h2')
        this.searchButton = Selector('input#nav-search-submit-button')
        this.searchInput = Selector('input#twotabsearchtextbox')        
    }

    async hamburgerMenu_Click(){
        await t
        .click(this.hamburgerMenu)
    }

    async menu_CustomerServiceOpt_Click(){
        await t
        .click(this.menu_CustomerServiceOpt)
    }

    async submitProduct(product){
        await t
        .typeText(this.searchInput, product)
        .click(this.searchButton)
    }

    async verify_priceGreaterThanCero(){
        const priceFirstElement = await this.priceFirstElement.textContent
        const cleanedPriceFirstElement = priceFirstElement.replace(/[$,]/g,'')
        await t
        .expect(parseFloat(cleanedPriceFirstElement)).gt(0, {timeout:5000}, 'Assert Price of first element is greater than 0')
    }

    async verify_searchResults(){
        await t
        .expect(this.resultProducts.count).gt(0, {timeout:5000}, 'Assert search results returns at least 1 result')
    }    
    
}
export default new Page();