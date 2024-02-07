# Encrypt Id

This module contains functions to encrypt and decrypt the user id.

## Methods

### `encryptUser(userId)`

This function encrypts the user id and saves it in the local storage.

It encrypts the id using the `crypto-js` and the `encryptionKey` from the environment variables. It then saves the encrypted id in the local storage.

**Parameters**

| Parameter | Description |
|-----------|-------------|
| `userId`  | The user id to be encrypted. |

### `decryptUser(void)`

This function decrypts the user id and returns it.

It gets the encrypted id from the local storage and decrypts it using the `crypto-js` and the `encryptionKey` from the environment variables.
