# Admin School List

This page is used to manage schools. Users can view, add, and edit schools from this page. It includes functionality for filtering schools based on cities and GEEs, as well as searching for specific schools.

|         |                           |
|------------|--------------------------------------|
| **Route**      | `/admin/escolas`      |
| **Component**  | `<AdminSchools />`                      |
| **Filepath**       | `src/pages/Admin/School/AdminSchools.jsx` |

## Dependencies

- React
- react-auth-kit
- react-router-dom
- @mui/icons-material
- primereact/datatable
- primereact/column
- primereact/inputtext
- primereact/dropdown
- primereact/button

## Properties

### State Variables

- `selectedCity`: Holds the currently selected city.
- `listCity`: Holds the list of cities fetched from the API.
- `selectedGEE`: Holds the currently selected GEE (Group of Educational Entities).
- `listGEE`: Holds the list of GEEs fetched from the API.
- `allSchools`: Holds all schools fetched from the API.
- `listSchool`: Holds the filtered list of schools based on selected city and GEE.
- `globalFilterValue`: Holds the value for global search/filter.
- `filters`: Holds the filter settings.

### Hooks

- `useAuthUser`: Custom hook for accessing authentication user data.
- `useNavigate`: Hook for navigation in React Router.
- `useToast`: Custom hook for displaying toast notifications.

### Functions

- `onGlobalFilterChange`: Handles changes in the global search/filter input.
- `initFilters`: Initializes the filter settings.
- `handleCreateClick`: Handles navigation to the page for adding a new school.
- `setSchoolByCity`: Filters schools based on the selected city.
- `fetchSchoolByGee`: Filters schools based on the selected GEE.
- `editIconsTemplate`: Renders the edit button for each school row.
- `viewIconsTemplate`: Renders the view button for each school row.

### Side Effects

- Fetches cities, GEEs, and schools data on component mount.
- Updates filtered school list based on selected city and GEE.

### Render

- Displays dropdowns for selecting city and GEE.
- Displays a search input for global filtering.
- Renders a DataTable component to display the list of schools.
