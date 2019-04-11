import { EncryptionService } from "./../utils/encryption.service";
let vConfig = require('../config/config.json');

var CryptoJS = require('crypto-js');

export let payOrder = (req, res) => {
    try {
        const decryptedWord = CryptoJS.enc.Base64.parse(req.params.orderdetails);
        const decrypted = CryptoJS.enc.Utf8.stringify(decryptedWord);
        let request = EncryptionService.getDecrypted(decrypted);
        let requestdata = JSON.parse(request);
        console.log('requestdata', requestdata);
        let result;
        if (requestdata[0].merchant_code == vConfig.merchant_code
            && requestdata[0].merchant_key == vConfig.merchant_key) {
            result = {
                status: 'confirmed',
                status_code: 0,
                description: 'payment confirmed'
            }
        }
        else {
            result = {
                status: 'declined',
                status_code: 1,
                description: 'payment declined'
            }
        }
        res.send(result);
    }
    catch (err) {
        console.log('error', err);
    }
}