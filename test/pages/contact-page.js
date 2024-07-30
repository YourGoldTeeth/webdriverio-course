import NavComponent from './components/nav-comp';
import { faker } from '@faker-js/faker';

class ContactPage {
    open() {
        return browser.url('/contact');
    }   

    get allContactFields() {
        return $$('[class*=contact] input');
    }

    get submitButton() {
        return $('#evf-submit-277');
    }

    get contactPageSuccessAlert(){
        return $("[role='alert']");
    }
    
}

export default new ContactPage();