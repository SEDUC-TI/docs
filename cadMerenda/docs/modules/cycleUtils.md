# Cycle Modules

## formatObject

This function formats the date object to be used in the cycle module. The input is the object returned from the database and the output is an array with instances of the object.

**Step-by-step:**

1. The function receives the data object as an argument.
2. It initializes the newData array which will store the formatted objects.
3. Iterate over each option in the options array.
4. For each option, create a new object with the specified format and push it into the newData array.
5. Return the newData array.

### Arguments

Below are the arguments of the function:

| Argument | Description                |
|-----------|----------------------------|
| `data`    | The object to be formatted.|

Function call example:

```javascript

data = {
    startNutri: '2021-10-01T00:00:00Z',
    deadlineNutri: '2021-10-01T00:00:00Z',
    startSchool: '2021-10-01T00:00:00Z',
    deadlineSchool: '2021-10-01T00:00:00Z',
    startSupplier: '2021-10-01T00:00:00Z',
    deadlineSupplier: '2021-10-01T00:00:00Z',
    initSelectSupplier: '2021-10-01T00:00:00Z',
    deadlineSelectSupplier: '2021-10-01T00:00:00Z',
}

const formattedData = formatObject(data);

```


### Returns

`newData` (Array): An array with the formatted object.

Return example:

```javascript
[
    {
      title: deadlineNutri,
      role: NUTRICIONISTA,
      description: 'Definir os itens disponíveis para pedidos.',
      start:  yyyy-mm-ddThh:mm:ssZ, // ISO 8601
      end: yyyy-mm-ddThh:mm:ssZ, // ISO 8601
      tag: undefined,
    }
    // Rest of the objects (school, supplier, selectSupplier)
]
```

## tagCycle

This function tags the cycle object with the status of the cycle. The input is the array of objects returned from the `formatObject` function and the output is the same array with the tag property updated.
