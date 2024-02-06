# Certificate (model)

Represents a certificate.

## Properties

| Property           | Description                                      |
|--------------------|--------------------------------------------------|
| userId                 | The id of the owner user                        |
| name               | The name of the certificate                       |
| expiration        | The expiration date of the certificate            |
| file              | The file of the certificate                       |
| requiredId       | The id of the required certificate registered in the database                |

## Methods

Below are the methods of the Certificate class.

### `constructor(name, expiration, file, requiredId)`

This method creates an instance of the Certificate class. It receives the name, expiration date, file and required certificate id as parameters and sets the properties.

### `verify(void)`

This method verifies if any of the properties is empty. If so, it returns `false`. Otherwise, it returns `true`.

### `getJSON(void)`

This method returns the certificate in a JSON format.

**Returns:** `Object` - The certificate in a JSON format.

**Return example:**

```javascript
{
    "userId": "123",
    "name": "Certificate of Completion",
    "expiration": "2021-12-31",
    "file": "certificate.pdf",
    "requiredId": "456"
}
```

### `log(void)`

This method logs the certificate in the console.

**Returns:** `void` - The certificate logged in the console.

###  `POST(void)` <Tag>ASYNC</Tag>

This method sends the certificate to the server.

It uses the `createCertificate` function (see [Certificate Requests](../modules/requests/certificate-requests.md)) to send the certificate to the server.

**Returns:** `Promise` - The promise of the request.

**Throws:** `Error` - If the request fails.

### `PUT(userToken)` <Tag>ASYNC</Tag>

This method updates the certificate in the server.

It uses the `updateCertificate` function (see [Certificate Requests](../modules/requests/certificate-requests.md)) to update the certificate in the server.

**Parameters:**

| Name      | Type     | Description                          |
|-----------|----------|--------------------------------------|
| userToken | `string` | The token of the user making the request |

**Returns:** `Promise` - The promise of the request.
