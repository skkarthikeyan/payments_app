var CryptoJS = require('crypto-js');
export class EncryptionService {
    constructor() {
    }
    static getEncrypted(pWords) {
        let encryption_key = 'asdjh7832ruigiou38q2e23urkfui3u';
        return CryptoJS.AES.encrypt(pWords, encryption_key).toString();
    }
    static getDecrypted(pWords) {
        let encryption_key = 'asdjh7832ruigiou38q2e23urkfui3u';
        return CryptoJS.AES.decrypt(pWords, encryption_key).toString(CryptoJS.enc.Utf8);
    }
}
