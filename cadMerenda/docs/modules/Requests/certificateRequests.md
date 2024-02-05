# Certificate Requests

List of all the requests for certificates.

path: `'src/api/certificateRequests.js'`

| Function | Method | Arguments | Return | API Route |
|----------|--------|-----------|--------|-----------|
| fetchCertificates | GET | -- | (Promise) All required certificates | ```/required-certificate/``` |
| getExpirationCertificates | GET | User ID, Auth Token | (Promise) User certificates with expiration date | ``` /required-certificate/expiration ``` |
| createRequiredCertificate | POST | Certificate, Auth Token | Promise resolve | ``` /required-certificate/ ``` |
| deleteRequiredCertificate | DELETE | Certificate ID, Auth Token | Promise resolve | ``` /required-certificate/:id ``` |
| getCertificatesBySupplier | GET | Supplier ID, Auth Token | (Promise) Supplier certificates | ``` /certificate/:id ``` |
| updateCertificate <sup>1</sup> | PUT | Certificate ID, Certificate, Auth Token | Promise resolve | ``` /upload/update/:requiredCertificateId/:userId ``` |
| createCertificate <sup>1</sup> | POST | Certificate | Promise resolve | ``` /upload/create/ ``` |
| downloadCertificate | GET | Certificate ID, Auth Token | (Promise) Certificate file | ``` /certificate/download/:id ``` |

## Notes

**1. Create/Update**

The POST and PUT methods for suppliers to create and update certificates use a different application type, which is `multipart/form-data`. This is because the request needs to send a file, which is not possible with the default `application/json` type. Despite the type, the request does not explicitly mention `multipart/form-data` in the `Content-Type` header. This is because the `fetch` function automatically sets the `Content-Type` header to `multipart/form-data` when the request body is a `FormData` object.

The formData is declared as such (example from createCertificate):

```jsx title="/src/pages/Certificates/components/CertificateForm.jsx"
const formData = new FormData();
    formData.append('pdf', certificate.file);
    formData.append('name', certificate.name);
    formData.append('expiration', certificate.expiration);
    formData.append('userId', certificate.userId);
```

