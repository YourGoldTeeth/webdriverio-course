const path = require('path');
// import path from 'path'

describe('Upload tests', () => {
    it('Simple upload test', async () => {
        //open url
        await browser.url('https://the-internet.herokuapp.com/upload');

        // console.log(__dirname);
        
        //store test file path
        const filePath = path.join(__dirname, '../data/logotitle.png');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath); //uses id of file-upload
        await $('#file-submit').click(); //click the submit button via button id

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });

    it.only('upload on a hidden input field', async () => {
        //open url
        await browser.url('/cart/');

        //store test file path
        const filePath = path.join(__dirname, '../data/logotitle.png');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className = ''")

        //set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath); //uses id of file-upload
        await $('#upload_1').click(); //click the submit button via button id

        //assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
        
    });
    
});