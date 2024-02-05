# ManageCertificates

This page is used to manage the certificates that are required to be uploaded by the suppliers.

## Functionalities

- Register a new certificate
- Delete a certificate

___

## Components

Below are the specific components used in this page.

### DeleteConfirmation

``` jsx title="/src/pages/Certificates/components/DeleteConfirmation.jsx"
DeleteConfirmation.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  certificate: PropTypes.objectOf(PropTypes.string).isRequired,
};
```
