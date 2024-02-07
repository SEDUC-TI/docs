# Data Parser

path: `src/utils/dateParser.js`

The data parser is a module that is responsible for parsing and validating the data that comes from the forms. It is used in the models to validate the data before sending it to the server, as well as in views that don't use models.

## Validation Methods

| Function                    | Description                       |
|-----------------------------|--------------------------------------|
| `validateName`              | Validates the name.                  |
| `validateStateRegistration` | Validates the state registration.    |
| `validateEmail`             | Validates the email.                 |
| `validatePassword`          | Validates the password.              |
| `validateCpf`               | Validates the CPF.                   |
| `validateRole`              | Validates the role.                  |
| `validateInep`              | Validates the INEP.                  |
| `validateCNAE`              | Validates the national activity code.              |
| `validateCNPJ`              | Validates the CNPJ.               |
| `validatePhone`             | Validates the phone.                 |
| `matchPassword`             | Check if the password matches the confirmation              |

## Parsing Methods

| Function                    | Description                       | Return                   |
|-----------------------------|-----------------------------------|--------------------------|
| `parseDate`                 | Parses the date.                  | `dd/mm/yyyy` formatted date. |
| `adjustStartTime`           | Adjusts the start time to begin at 00:00.           | ISOString date with time `00:00:00.000`.    |
| `adjustEndTime`             | Adjusts the end time to end at 23:59.           | ISOString date with time `23:59:59.999`.    |
| `formatCpf`                 | Formats the CPF.                  | Formatted CPF.           |

## Specific Methods

### `handleCep(e, showToast)` <Tag> ASYNC </Tag>

This method is responsible for handling the CEP input. It receives the event and the toast trigger function as parameters. It checks if the input value is a valid CEP using the ViaCEP API (see [Location Requests (external)](./requests/external/location-requests.md)). If the CEP is valid, it fills the address fields with the fetched data. If the CEP is invalid, it shows a toast with an error message.

