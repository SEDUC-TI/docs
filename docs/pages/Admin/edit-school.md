# Edit School Page

This page allows admins to edit school information, including address, GEE (Group of Educational Entities), and modalities.


|         |                           |
|------------|--------------------------------------|
| **Route**      | `/admin/editar-escola/:schoolId`      |
| **Component**  | `<EditSchool />`                      |
| **Filepath**       | `src/pages/Admin/School/components/EditSchool.jsx` |


## Dependencies

- React
- react-auth-kit
- react-router-dom
- @mui/icons-material
- primereact/breadcrumb
- primereact/button
- primereact/confirmdialog

## Properties

### State Variables

- `selectedModalities`: Holds the selected modalities for the school.
- `selectedGee`: Holds the selected GEE for the school.
- `geeList`: Holds the list of GEEs fetched from the API.
- `schoolData`: Holds the data of the school being edited.
- `newUser`: Ref for tracking if the user is new or not.
- `success`: Holds the success status of the edit operation.

### Hooks

- `useLocation`: Hook for accessing the current URL location.
- `useNavigate`: Hook for navigation in React Router.
- `useAuthUser`: Custom hook for accessing authentication user data.
- `useToast`: Custom hook for displaying toast notifications.

### Functions

- `handleClick`: Handles the click event for saving the edited school information.
- `accept`: Navigates to the view school page upon confirmation.
- `confirmCancel`: Shows a confirmation dialog for canceling the edit operation.

### Side Effects

- Fetches school data and GEE list on component mount.
- Displays toast notification upon successful edit.

### Render

- Displays breadcrumb navigation.
- Provides options to cancel or save the edits.
- Renders the form fields for editing school information.

## Specific Components

### EditFields

Renders the form fields for editing school information.


| Prop Name        | Type                          | Description |
|------------------|-------------------------------|----------|
| `data`             | object (required)             | School data |
| `modalityGetter`   | array (required) | Array of modalities |
| `modalitySetter`   | function (required) | Function for setting modalities |
| `geeList`          | array of objects (required)           | List of GEEs |
| `geeFunc`          | function (required) | Function for setting GEEs |

