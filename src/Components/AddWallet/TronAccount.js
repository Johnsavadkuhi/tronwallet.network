import {generateAccount} from '@tronprotocol/wallet-api/src/utils/account';
import {encryptPrivateKey , encryptKey} from "../../Utils/Encrypt";

export default class TronAccount {

    constructor() {

        const {address, privateKey} = generateAccount();
        this.myPrivateKey = privateKey;
        this.myAddress = address;

    }

     get address() {
        return this.myAddress;
    }

     get privateKey() {
        return this.myPrivateKey;
    }

    resest (){

        const {address, privateKey} = generateAccount();
        this.myPrivateKey = privateKey;
        this.myAddress = address;
        return this  ;
    }

     getEncryptedPrivateKey(password)
    {
       return  encryptPrivateKey(encryptKey(Buffer.from(password)), this.myPrivateKey).hex
    }

    clear ()
    {
        this.myPrivateKey='';

    }
}




