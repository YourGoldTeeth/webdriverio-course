import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe('Navigation Menu', () => {
    it('Get the text of all menu items and assert them', async () => {
        //go to home page
        allureReporter.addFeature("navigation");
        allureReporter.addSeverity("critical");
        await browser.url('/');

        //get text of all menu items
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const actualLinks = [];

        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }
            
        //assert them
        await expect(expectedLinks).toEqual(actualLinks);
    });

    it('Get the text of all menu items and assert them', async () => {
        //go to home page

        // browser.pause(5000);

        //await browser.url('/');
        await HomePage.open;

        //get text of all menu items
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const actualLinks = [];

        // await $('#zak-primary-menu').waitForDisplayed({ timeout: 1000});
        await HomePage.NavComponent.firstNavMenuList.waitForClickable(); //for button
        // .waitForEnabled() is for input field
        // .waitForExist() is for present in DOM

        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        const navLinks = await HomePage.NavComponent.linksNavMenu;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }
            
        //assert them
        await expect(expectedLinks).toEqual(actualLinks);
    });
    
    it('Get the text of all menu items and assert them', async () => {
        //go to home page
        await browser.url('/');

        //get text of all menu items
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];

        const actualLinks = [];

        //const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        // const navLinks = await $$('#zak-primary-menu li[id*=menu]');

        //wait until the Home text is displayed on the naviation menu
        await browser.waitUntil(async function () {
            const homeText = await HomePage.NavComponent.firstNavMenuList.getText();// variable recieves "home" since it is the first list item from the id
            return homeText === "Home"; //returns boolean
        }, {timeout: 5000,
            timeoutMsg: 'Could not verify the home text from the primary menu'
        });

        // const navLinks = await $$('#primary-menu li[id*=menu]')
        
        // for (const link of navLinks) {
            // actualLinks.push(await link.getText());
        // }
            
        //assert them
        // await expect(actualLinks).toEqual(expectedLinks);
    });
});