import Web3 from 'web3';
import PrivateTransaction from 'web3js-quorum/src/privateTransaction.js';

// Example Quorum transaction signing
const signTransaction = async () => {
    const privateKey = 'replace_with_PK';
    const tx = {
        nonce: 18,
        gasPrice: 0,
        gasLimit: 16234336,
        to: 'replace_with_address',
        value: 1,
        chainId: 1337,
    };
    const web3 = new Web3();
    const signedTransaction = await web3.eth.accounts.signTransaction(tx, privateKey);
    console.log('Signed transaction:');
    console.log(signedTransaction.rawTransaction);
}

// Example Quorum private transaction signing
const signPrivateTransaction = () => {
    const privateKey = 'replace_with_PK';
    const tx = {
        nonce: 18,
        gasPrice: 0,
        gasLimit: 16234336,
        to: 'replace_with_address',
        value: 1,
        chainId: 1337,
    };
    const privTx = new PrivateTransaction();
    privTx.privateFrom = 'BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=';
    privTx.privateFor = ['1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg='];
    privTx.restriction = 'restricted';
    privTx.nonce = tx.nonce;
    privTx.gasPrice = tx.gasPrice;
    privTx.gasLimit = tx.gasLimit;
    privTx.to = tx.to;
    privTx.value = 0;
    privTx._chainId = tx.chainId;
    privTx.sign(Buffer.from(privateKey.split('0x')[1], "hex"));
    const signedRawTransaction = privTx.serialize().toString("hex");
    console.log('Signed private transaction:');
    console.log(signedRawTransaction);
}

await signTransaction();

signPrivateTransaction();
