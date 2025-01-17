describe('iFrame', () => {
    it('', async () => {
        //open url
        await browser.url('https://practice.sdetunicorns.com/iframe-sample/');

        //access the iframe
        const iframe = await $('#advanced_iframe');
        await browser.switchToFrame(iframe);
        
        //verify if logo exists
        await expect($('.hfe-site-logo-set')).toExist();

        //switch to parent frame
        await browser.switchToParentFrame();

        //verify page title
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
    });
});