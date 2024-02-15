# Miscellaneous

This section discloses minor helper files present in the `src/utils` folder.

### Constants

- `src/utils/constants.js`: This file contains all the constants used in the application, except for the ones in the environment files.

| Constant Group | Description |
| -------------- | ----------- |
| HTTP_STATUS    | Key-value pair of the most common HTTP Status codes. |
| Sizes         | Key-value pair of window sizes used for responsiveness logic. |
| Measures      | Key-value pair of measures used for food items. |
| Application   | String for the application type used in requests. |

### Certificate State

- `src/utils/certificateState.js`: Contains functions for handling the state of the certificates for display purposes.

| Type | Name | Description |
| ---- | ---- | ----------- |
| Constant | `THIRTY_DAYS` | Thirty days in miliseconds. |
| Constant | `FIFTEEN_DAYS` | Fifteen days in miliseconds. |
| Function | `decideState` | Decides the state of the certificate based on the expiration date. See the details below.|

**`decideState` logic:**

- If the certificate is expired, it returns `expired`.
- If the certificate is about to expire in less than 15 days, it returns `danger`.
- If the certificate is about to expire in less than 30 days, it returns `warn`.

### Format Price

- `src/utils/formatPrice.js`: Contains a function to format a string to locale currency.

### Random Hash

- `src/utils/randomHash.js`: Contains a function to generate a random hash.
- Used in the user creation view to set a random password for later redefinition.

### Roles

- `src/utils/roles.js`: Contains the roles used in the application.

