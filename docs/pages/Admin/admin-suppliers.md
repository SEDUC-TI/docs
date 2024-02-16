# Admin Suppliers Page

This page allows admins to manage suppliers. Users can view the list of suppliers and search for specific suppliers.

|         |                           |
|------------|--------------------------------------|
| **Route**      | `/admin/fornecedores`      |
| **Component**  | `<Suppliers />`                      |
| **Filepath**       | `src/pages/Admin/Suppliers/Suppliers.jsx` |

## Dependencies

- React
- react-router-dom
- primereact/datatable
- primereact/inputtext
- primereact/column
- @mui/icons-material
- react-auth-kit

## Properties

### State Variables

- `listSupplier`: Holds the list of suppliers fetched from the API.
- `globalFilterValue`: Holds the value for global search/filter.
- `filters`: Holds the filter settings.

### Hooks

- `useNavigate`: Hook for navigation in React Router.
- `useAuthUser`: Custom hook for accessing authentication user data.
- `useToast`: Custom hook for displaying toast notifications.

### Functions

- `onGlobalFilterChange`: Handles changes in the global search/filter input.
- `initFilters`: Initializes the filter settings.

### Side Effects

- Fetches the list of suppliers on component mount.
- Displays toast notification upon error fetching suppliers.

### Render

- Displays the page title.
- Provides a search input for global filtering.
- Renders a DataTable component to display the list of suppliers.
