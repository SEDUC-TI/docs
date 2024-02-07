# User Data

path: `src/utils/userData.js`

This module is reponsible for handling the user data, as well as encrypting and decrypting the user's password.

## Methods

### `getUserData(navigate)` <Tag> ASYNC </Tag>

This function is the entry point for the login process.

| Parameter | Description |
|-----------|-------------|
| `navigate` | A function to use the navigate method. |

**Step-by-step:**

1. Call the `waitForCookie` function to wait for the cookie to be set.
2. Split the cookies into fields.
3. Initialize a variable `token`.
4. Loop for each field to remove leading and trailing spaces, and check if the field is the token.
5. If the field is the token, set the `token` variable to the field value and break the loop.
6. Call the `fetchToken` function to fetch the user's token.

### `waitForCookie(void)`

**Step-by-step:**

1. Create a new Promise.
2. Create a function `checkCookie` that checks if the `_auth=` cookie is present in the document's cookies.
3. Set an interval to call the `checkCookie` function every 100ms.
4. If the `_auth=` cookie is found, call the resolve function of the Promise with the cookie string as an argument, effectively resolving the Promise.

### `fetchToken(navigate, token)` <Tag> ASYNC </Tag>

**Parameters**

| Parameter  | Description                            |
|------------|----------------------------------------|
| `navigate` | A function to use the navigate method. |
| `token`    | The user's token.                      |

**Step-by-step:**

1. Fetch the user's token from the server using the `token` parameter.
2. Get the response JSON and assign to the `data` variable.
3. Call the `encryptUser` function with the `id` property of the `data` variable as a parameter.
4. Set local storage with the user's role and name.
5. Call the `navigateHome` function with the `navigate` method as a parameter.


### `navigateHome(navigate)`

**Parameters**

| Parameter  | Description                            |
|------------|----------------------------------------|
| `navigate` | A function to use the navigate method. |

This is a set of rules to navigate the user to the correct page based on their role.