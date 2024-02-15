# Routes

Below are the list of routes, whether they are public or private, and the users that can access them.

## Public Routes

| Route | Description | Component(s) |
| ----- | ----------- | --------- |
| `/` | Home page. | Landing. Redirects to: NutriHome, SchoolHome, SuppliersHome or AdminHome |
| `/login` | Login page. | Login |
| `/cadastro` | Register page. | SignUp |
| `/esqueci-senha` | Password recovery page. | PasswordRecovery |
| `/nova-senha` | Password redefinition page. | PasswordRedifinition |
| `/logout` | Logout page. | Logout |
| `/erro` | Error page. | Error |
| `/indisponivel` | Unavailable page. | Closed |

## Private Routes

See also the `PrivateRoute` component in the `components` folder.

### Nutritionist Routes

| Route | Description | Component(s) |
| ----- | ----------- | --------- |
| `/nutricionista` | Nutritionist home page. | NutriHome |
| `/nutricionista/pautas` | Nutritionist general list page. | GeneralList |
| `/nutricionista/escolas` | Nutritionist school list page. | NutritionistSchools |
| `/nutricionista/visualizar-escola/:id` | School visualization page. | ViewSchool |
| `/nutricionista/alimentos` | Nutritionist food list page. | FoodList |

### Supplier Routes

| Route | Description | Component(s) |
| ----- | ----------- | --------- |
| `/fornecedor` | Supplier home page. | SuppliersHome |
| `/fornecedor/propostas` | Supplier proposals list page. | SuppliersProposal |
| `/fornecedor/propostas/:inep` | Supplier proposal for specific school. | SuppliersProposal |
| `/fornecedor/certidoes` | Supplier certificates list page. | SuppliersCertificates |
| `/fornecedor/escolas` | Supplier schools list page. | SuppliersSchools |

### School Routes

The school user has the most restricted access to the system. The available pages are controlled by the `SchoolCycleHandler` component, which is responsible for rendering the pages according to the system's cycle.

| Route | Description | Component(s) |
| ----- | ----------- | --------- |
| `/escola` | School main page. | SchoolCycleHandler. Renders: SchoolOrder, SchoolHome, BestSuppliers and SoonToView |
| `/escola/oferta/:id` | School offer viewing page. | SuppliersOffer |

### Admin Routes

| Route | Description | Component(s) |
| ----- | ----------- | ----------- |
| `/admin` | Admin main page. | Home |
| `/admin/ciclo` | Admin cycle page. | Cycles |
| `/admin/fornecedores` | Admin suppliers page. | Suppliers |
| `/admin/usuarios` | Admin users page. | Users |
| `/admin/visualizar-fornecedor/:supplierId` | Admin view supplier page. | ViewSupplier |
| `/admin/certidoes` | Admin certificates page. | ManageCertificates |
| `/admin/escolas` | Admin schools page. | AdminSchools |
| `/admin/cadastrar-escola` | Admin register school page. | RegisterSchool |
| `/admin/visualizar-escola/:schoolId` | Admin view school page. | ViewSchool |
| `/admin/editar-escola/:schoolId` | Admin edit school page. | EditSchool |

