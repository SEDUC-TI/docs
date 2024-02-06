# Order (model)

The Order model is used to store the information about the orders made by the school, handle the requests to the server and the data manipulation.

## Properties

| Property           | Description                                      |
|--------------------|--------------------------------------------------|
| inep              | The INEP code of the school                       |
| cycleId           | The id of the cycle of the order                  |
| hasInitiated      | The status of the instance                        |
| backup            | The backup of the order for later checking        |

## Methods

Below are the methods of the Order class.

### `constructor(void)`

This method creates an instance of the Order class.

### `init(inep, token)` <Tag>ASYNC</Tag>

This method initializes the instance of the Order class. It receives the INEP code and the token as parameters and sets the INEP property. It performs a series of procedures to set up the instance for usage. Below are the procedures:

1. Use the [`getCycle`](../modules/requests/cycle-requests.md) function to get the current active cycle of the system and sets the cycleId property.
2. Use the [`getModalityByInep`](../modules/requests/modality-requests.md) function to get the modalities of the school.
3. Map the fetched modalities, adding the `requestedProducts`, `generalList` and initializing `hasOrder` as false.
4. Use the [`getGeneralList`](../modules/requests/foodlist-requests.md) function to get the general list of products.
5. Map the modalities, setting their respective general list and formatting it simultaneously.
6. Use the [`getOrderByInep`](../modules/requests/order-requests.md) function to get the stored order, if it exists.
7. If the order exists, set the `hasOrder` property as true and set the `orderId` property as the fetched order's id.
8. Call the `mergeLists` method to merge the general list with the orders in the `modality` list.
9. Set the `hasInitiated` property as true.

**Throws:**

- `Error` - If the `getLatestCycle` function fails.
- `Error` - If the `getModalityByInep` function fails.
- `Error` - If the `getGeneralList` function fails.
- `Error` - If the `getOrderByInep` function fails.

### `mergeLists(void)`

This method is responsible for manipulating the `modality` property for front-end usage.

**Step-by-step:**

1. Iterates over each `modality` in the updatedModalities array. For each `modality`, it checks if the `hasOrder` property is truthy. If `hasOrder` is true, it means that there are some requested products for this `modality`.

2. The `generalList` property is an object that contains a food array. Each item in the food array is an object with properties like `id`, `name`, and `description`. The `requestedProducts` is also an array, where each item is an object with properties like `food_id`, `quantity`, and `frequency`.

3. The map function is used to create a new array `mergedList` from the `generalList.food` array. For each item in the `generalList.food` array, it tries to find a matching `orderItem` in the `requestedProducts` array where the `food_id` of the `orderItem` is equal to the id of the item.

4. If a matching `orderItem` is found, a new object is returned with all properties of the item `(...item)`, a `fullname` property that is a combination of the item's name and description, the `quantity` and `frequency` from the `orderItem`, and a `notOrdered` property set to false. The `quantityBackup` and `frequencyBackup` properties are also set to the `quantity` and `frequency` of the `orderItem` respectively.

5. If no matching `orderItem` is found, a similar new object is returned, but the `quantity`, `quantityBackup`, `frequency`, and `frequencyBackup` are set to null, and `notOrdered` is set to true.

6. The `mergedList` is then assigned to the unified property of the `modality`.

7. If `hasOrder` is false, the `generalList.food` array is directly assigned to the unified property of the `modality`.

### `checkInit(void)`

This method checks if the instance has been initiated. If not, it throws an error.

**Throws:**

- `Error` - If the instance has not been initiated.

### `getData(void)` <Tag color='warning'>GETTER</Tag>

This method returns the data of the instance.

**Step-by-step:**

1. Calls the `checkInit` method to check if the instance has been initiated.
2. Returns the data of the instance.

**Returns:**

- `Object` - The data of the instance.

### `updateValues(label, values)`

This method updates the quantity and frequency of the products in the order.

**Parameters:**

| Parameter | Description                           |
|-----------|---------------------------------------|
| label     | The label of the modality.             |
| values    | The values to be updated.              |

**Step-by-step:**

1. Finds the modality with the given label.
2. Iterates over the found modality's `unified` property and updates the `quantity` and `frequency` of the products with the given values.

**Returns:** `void`

### `checkEmptyValues(void)`

This method checks if there are any empty values (`frequency` and/or `quantity`) in the order.

**Step-by-step:**

1. If `quantity` is empty, it checks if the `frequency` is not empty. If so, it throws an error.
2. If `frequency` is empty, it checks if the `quantity` is not empty. If so, it throws an error.

**Throws:**

- `Error` - If there are any empty values in the order.

### `formatOrder(data)`

This method formats the order data to be sent to the server.

**Parameters:**

| Parameter | Description                           |
|-----------|---------------------------------------|
| data      | The data to be formatted.             |

**Step-by-step:**

1. Matches the `data` properties with the `requestedProducts` properties and returns the formatted data.

**Returns:**

- `Object` - The formatted data.

### `checkForChanges(void)`

This checks if there are any changes in the order. This is to avoid unnecessary requests to the server.

**Step-by-step:**

1. Iterates over the `modality` property and checks if there are any changes in the order.
2. If there are any changes, it returns `true`.
3. If there are no changes, it returns `false`.

**Returns:**

- `Boolean` - The result of the check.

### `checkDelete(item)`

This is a helper method that checks if the item is set to be deleted.

**Parameters:**

| Parameter | Description                           |
|-----------|---------------------------------------|
| item      | The item to be checked.               |


**Step-by-step:**

1. Checks if the `quantity` and `frequency` of the item are empty. If so, it returns `true`.
2. If the `quantity` and `frequency` are not empty, it returns `false`.

**Returns:**

- `Boolean` - The result of the check.

### `sendOrder(token)` <Tag>ASYNC</Tag>

This method sends the order to the server.

**Parameters:**

| Parameter | Description                           |
|-----------|---------------------------------------|
| token     | The token to be used.                 |

**Step-by-step:**

1. Calls the `checkInit` method to check if the instance has been initiated.
2. Maps the `modality` property and calls the `formatOrder` method for each modality to an array of promises.
3. While mapping, sets a`skip` auxiliary variable to `false`.
4. If the `requested_products`, `deleted_products` and there's no `order_id`, sets the `skip` variable to `true`.
5. If the `skip` variable is `false`, it chooses whether it's a PUT or a POST request based on the `order_id` property (if there is no `order_id`, it will be a POST as it does not exist).
6. If it's a PUT request, it calls the `updateOrder` function from the `order-requests` module, passing the formatted data and the token as parameters.
7. If it's a POST request, it calls the `createOrder` function from the `order-requests` module, passing the formatted data and the token as parameters.
8. The promise array is called with `Promise.all`.

**Throws:**

- `Error` - If the `updateOrder` function fails.
- `Error` - If the `createOrder` function fails.