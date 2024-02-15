# Cycle Utility Functions

path: `src/utils/cycleUtils.js`

## cycleParser

This is the main function of the cycle module. It takes the data object from the database and returns the formatted and tagged data. The input is the object returned from the database and the output is an object with the formatted and tagged data in multiple formats for optimal handling.

**Step-by-step:**

1. Checks if the data argument is provided. If not, it returns `null`.
2. Formats the data using the `formatObject` function.
3. Tags the `formattedData` using the `tagCycle` function.
4. Checks if the first item in `taggedData` has a title of `'CURRENT STAGE'`. If so, it removes this item from `taggedData` and assigns it to `activeStage`.
5. If `taggedData` is now empty, it returns an object with a date of `'00/00/0000'`, `daysToClose` of 0, and data as the `formattedData`.
6. Checks the availability of `taggedData` using the `checkAvailability` function.
7. Returns an object with various properties derived from `activeStage`, availability, and `taggedData`.

### Arguments 

Below are the arguments of the function:

| Argument | Description                |
|-----------|----------------------------|
| `data`    | The object to be parsed.|

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

const parsedData = cycleParser(data);

```

### Returns

`parsedData` (Object): An object with the formatted and tagged data.

Return template:

```javascript
{
  {
    ended: activeStage === null && taggedData[0].title === 'END OF CYCLE',
    soon: activeStage === null && taggedData[0].title !== 'END OF CYCLE',
    betweenStage: activeStage === null,
    list: availability.PAUTAS,
    school: availability.PEDIDOS,
    supplier: availability.PROPOSTAS,
    view: availability.VISUALIZAÇÃO,
    date: activeStage === null ? '00/00/0000' : parseDate(formattedData[activeStage.index].end),
    daysToClose: activeStage === null ? '0' : daysUntil(formattedData[activeStage.index].end),
    data: taggedData,
  }
}
```

The leaf functions used in the `cycleParser` function are described below.

--- 

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
---

## tagCycle

This function tags the cycle object with the status of the cycle. The input is the array of objects returned from the `formatObject` function and the output is the same array with the tag property updated.

**Step-by-step:**

1. For each item in the data array, it gets the start and end dates and converts them to time in milliseconds (using `Date.getTime()`).

2. It then checks if the currentDate is between the start and end dates. If it is, it sets the `activeIndex` to the current index (`i`) and pushes a new object to the tagged array. This new object is a copy of the current item (`...item`) with an additional tag property set to `'OPEN'`.

3. If the `currentDate` is less than the start date, it means the event or task hasn't started yet. In this case, it pushes a new object to the tagged array with the tag property set to `'PENDING'`, and sets `hasAnyPending` to true.

4. If the `currentDate` is greater than the end date, it means the event or task has already finished. In this case, it pushes a new object to the tagged array with the tag property set to `'FINISHED'`. 

5. `hasAnyPending` is an auxiliary variable used to add a layer of formatting based on the status of the cycle. If there is an active index, an object with the title 'CURRENT STAGE' and the active index value is added. If there are no pending items (and `activeIndex` is `null`), an object with the title 'END OF CYCLE' is added (as it means all stages have passed and the cycle is obsolete).

### Arguments

Below are the arguments of the function:

| Argument | Description                |
|-----------|----------------------------|
| `data`    | The array of objects to be tagged.|

Function call example:

```javascript

data = [
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

const taggedData = tagCycle(data);

```

### Returns

`data` (Array): An array with the tagged objects.

Return example:

```javascript
[
    {
      title: deadlineNutri,
      role: NUTRICIONISTA,
      description: 'Definir os itens disponíveis para pedidos.',
      start:  yyyy-mm-ddThh:mm:ssZ, // ISO 8601
      end: yyyy-mm-ddThh:mm:ssZ, // ISO 8601
      tag: 'PENDING',
    }
    // Rest of the objects (school, supplier, selectSupplier)
]
```
---

## daysUntil

This function calculates the days until a certain date. The input is the date (it can be in any format the `Date` object accepts) and the output is the number of days until that date.

**Step-by-step:**

1. It gets the current date and the date to be compared.
2. It calculates the difference in milliseconds between the two dates.
3. It converts the difference to days and returns the result.

### Arguments

Below are the arguments of the function:

| Argument | Description                |
|-----------|----------------------------|
| `date`    | The date to be compared.|

Function call example:

```javascript

date = '2021-10-01T00:00:00Z';

const days = daysUntil(date);

```

### Returns

`days` (Number): The number of days until the date.

Return example:

```javascript

days = 10;

```

---

## checkAvailability

This function is a 'quality of life' functions that outputs the cycle statuses in a key-value format. The input is the array of objects returned from the `tagCycle` function and the output is an object with the cycle statuses. This is so it's easier to check the status of the cycle.

**Step-by-step:**

1. The `checkAvailability` function takes an object as input.
2. It checks the title property of each object in the input object.
3. It creates a new object with properties corresponding to specific titles.
4. It assigns the tag value from the matching object to the corresponding property in the new object.
5. Finally, the function returns this new object.

### Arguments

Below are the arguments of the function:

| Argument | Description                |
|-----------|----------------------------|
| `data`    | The array of objects to be checked.|

Function call example:

```javascript

data = [
    {
      title: deadlineNutri,
      role: NUTRICIONISTA,
      description: 'Definir os itens disponíveis para pedidos.',
      start:  yyyy-mm-ddThh:mm:ssZ, // ISO 8601
      end: yyyy-mm-ddThh:mm:ssZ, // ISO 8601
      tag: 'PENDING',
    }
    // Rest of the objects (school, supplier, selectSupplier)
]

const cycleStatus = checkAvailability(data);

```

### Returns

`cycleStatus` (Object): An object with the cycle statuses.

Return example:

```javascript
{
    PAUTAS: 'PENDING',
    PEDIDOS: 'PENDING',
    PROPOSTAS: 'PENDING',
    VISUALIZAÇÃO: 'PENDING',
}
```
---

## checkOverlapDates

This function checks if there are overlapping dates in the cycle. The input is an object keys which values are arrays containing their start and end date, in order. It throws an error if there are overlapping dates.

**Step-by-step:**

1. Map the object to return an array only with the start dates.
2. Map te object to return an array only with the end dates.
3. Sort the start and end dates arrays ascendingly.
4. Iterate over the start dates array.
5. For each start date, check if it is greater than the previous end date. If it is, return true. If it isn't, throw an error.
