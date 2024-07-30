import ContactPage from "../pages/contact-page";
import { faker } from '@faker-js/faker';    

describe('Contact page', () => {
    it('input fields', async () => {
        //go to contact page
        await browser.url('https://practice.sdetunicorns.com/contact/');

        //fill all the input fields
        //const contactFields = await $$('[class*=contact] input');
        const contactFields = await ContactPage.allContactFields;

        for (const field of contactFields) {
            await $(field).addValue(faker.internet.email());
        } 

        await $('').value

        //submit form
        //browser.pause(5000);
        //await browser.debug();
        //await browser.debug();
        await ContactPage.submitButton.click();

        //assert the success message
        //const successAlert = ContactPage.contactPageSuccessAlert;
        await expect(ContactPage.contactPageSuccessAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');
        //await expect('.everest-forms-notice--success').isExisting;
    });
    
});