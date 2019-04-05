import pbkdf2 from 'pbkdf2';
import aesjs from "aes-js";
import {isAddressValid, privateKeyToAddress} from "@tronprotocol/wallet-api/src/utils/crypto";


export function encryptKey(password) {
    return pbkdf2.pbkdf2Sync(password, 'salt', 1, 256 / 8, 'sha512');
}

export function encryptPrivateKey (password, hexString) {
    const textBytes = aesjs.utils.utf8.toBytes(hexString);
    const aesCtr = new aesjs.ModeOfOperation.ctr(password);
    const encrypted = aesCtr.encrypt(textBytes);
    return {
        bytes: encrypted,
        hex: aesjs.utils.hex.fromBytes(encrypted),
    };
}


export function decryptPrivateKey(password, hexString) {
    let key = encryptKey(password);
    const encryptedBytes = aesjs.utils.hex.toBytes(hexString);
    const aesCtr = new aesjs.ModeOfOperation.ctr(key);
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
}

export function validatePrivateKey(privateKey) {
    try {
        const address = privateKeyToAddress(privateKey);
        return isAddressValid(address);
    } catch (e) {
        return false;
    }
}


