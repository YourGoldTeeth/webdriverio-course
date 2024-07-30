// Practice E-Commerce Site – SDET Unicorns
// https://practice.sdetunicorns.com/

import HomePage from "../pages/home-page";

describe('Home', () => {

    // before( async () => {
    //     console.log('This could be used for test setup')
    // });

    beforeEach( async () => {
        console.log('This runs before each test');
        await HomePage.open;
    });

    // after( async () => {
    //     console.log('This could be used for test cleanup');
    // });

    // afterEach( async () => {
    //     console.log('This could be used for test clean up');
    // });


    it('Open URL and assert title', async () => {
        // Open URL
        //await browser.url('https://practice.sdetunicorns.com/');
        await HomePage.open();

        //Assert Title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });

    it('Open URL and assert URL', async () => {
        // Open URL
        await browser.url('https://practice.sdetunicorns.com/about/');

        //Assert Title
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

    it('Click get started button and assert url contains get started text', async () => {
        // Open Home Page
        await browser.url('https://practice.sdetunicorns.com/');

        //Click get started button
        // $('#get-started').click();
        (await HomePage.btnGetStarted).click();

        //Assert URL contains gget-started text
        await expect(browser).toHaveUrlContaining('get-started');
    });

    it('Click get website icon and assert url does not have get started', async () => {
        
        await browser.url('https://practice.sdetunicorns.com/#get-started');

        //click website icon
        // await $('.custom-logo').click();
        await HomePage.imageLogo.click();

        //assert url is homepage
        await expect(browser).not.toHaveUrlContaining('get-started');
    });

    it('Find heading element and assert the text', async () => {
        
        // open home page
        await browser.url('https://practice.sdetunicorns.com/#get-started');

        //find heading element
        const headingEl= await HomePage.headingElement;

        //get the text
        const headingText = await headingEl.getText();

        //assert text
        //await expect(headingText).toEqual('Think different. Make different.');
        await expect(headingEl).toHaveText('Think different. Make different.');
    });
});

