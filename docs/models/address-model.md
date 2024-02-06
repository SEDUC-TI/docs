# Address (model)

Represents an address. This class gets the data directly from the html form through `getElementById` method. 

## Properties

| Property           | Description                                      |
|--------------------|--------------------------------------------------|
| zip                | The ZIP code of the address                      |
| street             | The street name of the address                    |
| number             | The house number of the address                   |
| district           | The district of the address                       |
| city               | The city of the address                           |
| state              | The state of the address                          |
| complement         | Additional information about the address          |
| immediate_region   | The immediate region of the address (empty string) |
| intermediate_region| The intermediate region of the address (empty string) |

## Methods

Below are the methods of the Address class.

### `constructor(void)`

This method creates an instance of the Address class. It receives no parameters and sets the properties as per the form data.

### `verify(void)`

This method verifies if any of the properties is empty. If so, it returns `false`. Otherwise, it returns `true`.

### `getJSON(void)` <Tag color='warning'>GETTER</Tag>

This method returns the address in a JSON format.

**Returns:** `Object` - The address in a JSON format.

**Return example:**

```javascript
{
    "zip": "12345-678",
    "street": "Rua das Flores",
    "number": "123",
    "district": "Centro",
    "city": "São Paulo",
    "state": "SP",
    "complement": "Apto 123",
    "immediate_region": "",
    "intermediate_region": ""
}
```

### `assignRegions(void)`

This method assigns the immediate and intermediate regions of the address through the `getRegions` request from the IBGE API. (See [Location Requests](../modules/requests/external/location-requests.md)). It returns void and sets the `immediate_region` and `intermediate_region` properties, if found.

