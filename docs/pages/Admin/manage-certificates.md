# Certificate Management

This page allows users to manage certificates. Users can view a list of certificates, delete certificates, and create new certificates.

|         |                           |
|------------|--------------------------------------|
| **Route**      | `/admin/certidoes`      |
| **Component**  | `<ManageCertificates />`                      |
| **Filepath**       | `src/pages/Admin/Certificates/ManageCertificates.jsx` |

## Dependencies

- React
- primereact/datatable
- primereact/column
- primereact/button
- @mui/icons-material
- react-auth-kit

## Properties

### State Variables

- `certificateList`: Holds the list of certificates fetched from the API.
- `activeCertificate`: Holds the data of the certificate currently being interacted with.
- `visibleDelete`: Holds the visibility state of the delete confirmation dialog.
- `visibleCreate`: Holds the visibility state of the new certificate creation dialog.

### Hooks

- `useAuthUser`: Custom hook for accessing authentication user data.
- `useToast`: Custom hook for displaying toast notifications.

### Functions

- `deleteIcons`: Renders the delete icon button for each certificate.

### Side Effects

- Fetches the list of certificates on component mount.
- Displays toast notification upon error fetching certificates.

### Render

- Displays the page title.
- Provides a button for creating a new certificate.
- Renders a DataTable component to display the list of certificates.
- Provides the ability to delete certificates with a confirmation dialog.
- Provides the ability to create new certificates with a dialog.

---

## Specific Components

### NewCertificate

This dialog component allows admin users to create a new certificate.

