# School (model)

The School model is used to store the information about the schools, handle the requests to the server and the data manipulation.

## Properties

| Property | Description | 
|----------|-------------|
| name     | The name of the school. |
| inep     | The INEP code of the school. |
| cnpj     | The CNPJ of the school. |
| geeId    | The GEE id of the school. (Initialized null) |
| phone    | The phone number of the school. |
| email    | The email of the school. |
| modalities | The modalities of the school. (Initialized null)|
| address  | The address of the school. |
| address.zip | The zip code of the school. |
| address.street | The street of the school. |
| address.number | The number of the school. |
| address.district | The district of the school. |
| address.city | The city of the school. |
| address.state | The state of the school. |
| address.complement | The complement of the school. |
| address.immediate_region | The immediate region of the school. |
| address.intermediate_region | The intermediate region of the school. |
| addressId | The id of the address of the school. |
| addedModalities | The modalities added to the school. (Initialized null / edit mode) |
| deletedModalities | The modalities deleted from the school. (Initialized null / edit mode)|

## Methods

Below are the methods of the School class.

### `constructor(void)`

This method creates an instance of the School class.

### `isAnyBlank(void)`

This method checks if any of the properties of the instance are blank.

**Returns:**

- `boolean` - True if any property is blank, false otherwise.

### `verify(void)`

This method calls the methods within the parser module to validate the properties of the instance. The parser module throws an error if any property is invalid, and this method lets the error pass through.

### `setModalities(modalities)` <Tag color='info'>SETTER</Tag>

This method sets the modalities of the school.

**Parameters:**

| Parameter | Descripion |
|-----------|------------|
| modalities | The modalities to be set. |


### `setGeeId(geeId)` <Tag color='info'>SETTER</Tag>

This method sets the GEE id of the school.

**Parameters:**

| Parameter | Descripion |
|-----------|------------|
| geeId | The GEE id to be set. |


### `getInep(void)` <Tag color='warning'>GETTER</Tag>

This method returns the INEP code of the school.

**Returns:**

- `string` - The INEP code of the school.

### `setAddressId(id)` <Tag color='info'>SETTER</Tag>

This method sets the address id of the school.

**Parameters:**

| Parameter | Descripion |
|-----------|------------|
| id | The address id to be set. |

### `compareModalities(original, userToken)` <Tag>ASYNC</Tag>

This method compares the original modalities with the edited modalities.

**Parameters:**

| Parameter | Descripion |
|-----------|------------|
| original | The original modalities. |
| userToken | The user token. |

**Step-by-step:**

1. Fetch the original modalities from the server.
2. Compare the original modalities with the edited modalities.
3. If there are any new modalities, add them to the `addedModalities` property.
4. If there are any deleted modalities, add them to the `deletedModalities` property.

**Throws:**

- `Error` - If there is an error in the request.

### `getJSON(void)` <Tag color='warning'>GETTER</Tag>

This method returns the JSON representation of the instance.

**Returns:**

- `Object` - The JSON representation of the instance.

### `getUpdateJSON(void)` <Tag color='warning'>GETTER</Tag>

This method returns the JSON representation of the instance to be sent to the server through a PUT request.

**Returns:**

- `Object` - The JSON representation of the instance.

### `POST(token)` <Tag>ASYNC</Tag>

This method sends the school data to the server (registers it).

**Step-by-step:**

1. Call `setRegions` to set the intermediate and immediate regions.
2. Post the school using the [`createSchool`](../modules/requests/school-requests.md) function.

**Throws:**

- `Error` - If there is an error in the request.

### `PUT(token)` <Tag>ASYNC</Tag>

This method updates the school data in the server.

**Step-by-step:**

1. Call `setRegions` to set the intermediate and immediate regions.
2. Put the school using the [`updateSchool`](../modules/requests/school-requests.md) function.

**Throws:**

- `Error` - If there is an error in the request.
