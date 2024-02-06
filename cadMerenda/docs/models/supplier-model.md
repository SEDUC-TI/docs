# Supplier (model)

This class is used to store the information about the suppliers, handle the requests to the server and the data manipulation. It is the model used in the Signup page.

## Properties

| Property            | Description                                      |
|---------------------|--------------------------------------------------|
| cnpj                | Supplier's CNPJ                     |
| company_name        | Company's registered name               |
| trade_name           | Fantasy (display) name               |
| state_registration | State registration value       |
| cnae           | National activity code                     |
| phone          | The supplier's phone number (parsed to raw) |
| email          | Email to be used to log in              |
| tech_manager   | Name of the owner / tech manager                |
| password       | Password                 |
| address        | New instance of the 'Address' class               |
| id             | Initialized as null                                             |

## Methods

### `constructor(void)`

This method creates an instance of the Supplier class.

### `verifyBlankFields(void)`

This method checks if any of the properties of the instance are blank.

**Throws:**

- `Error` - If any property is blank.

### `verify(void)`

This method calls the methods within the parser module to validate the properties of the instance. The parser module throws an error if any property is invalid, and this method lets the error pass through.

### `setId(id)` <Tag color='info'>SETTER</Tag>

This method sets the id of the supplier.

**Parameters:**

| Parameter | Descripion |
|-----------|------------|
| id        | The id to be set. |

### `getJSON(void)` <Tag color='warning'>GETTER</Tag>

This method returns the instance as a JSON object.

**Returns:**

- `object` - The instance as a JSON object.

### `POST(void)` <Tag>ASYNC</Tag>

This method sends the instance to the server to be stored.

**Step-by-step:**

1. Calls the `verify` method.
2. Calls the address' `verify` method.
3. Calls the `setRegions` method from the address instance.
4. Calls the `getJSON` method within [`createSupplier`]('../modules/requests/supplier-requests.md').

**Returns:**

- `object` - The response from the server.

**Throws:**

- `Error` - If the server returns an error.



