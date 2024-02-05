# Supplier Requests

# List of supplier-related requests

path: `'src/api/supplierRequests.js'`

| Function                    | Method | Arguments                                                         | Return                              | API Route                                             |
|-----------------------------|--------|-------------------------------------------------------------------|-------------------------------------|-------------------------------------------------------|
| createSupplier              | POST   | Supplier                                                          | (Promise) Created supplier details | `/signup/create`                                       |
| getOfferedSchools           | GET    | Supplier ID, Auth Token, Cycle ID                                  | (Promise) List of offered schools  | `/offer/supplier/:id/schools/:cycleId`                  |
| fetchSuppliers              | GET    | Auth Token                                                        | (Promise) List of suppliers        | `/supplier/`                                          |
| getSupplierByUserId          | GET    | User ID, Auth Token                                               | (Promise) Supplier details         | `/supplier/user/:user_id`                              |
| getSupplierById              | GET    | Supplier ID, Auth Token                                           | (Promise) Supplier details         | `/supplier/:id`                                       |
| getOfferByInepAndSupplier    | GET    | School INEP, Supplier ID, Cycle ID, Auth Token                    | (Promise) Offer details             | `/offer/school/:school_inep/:supplier_id/:cycle_id`   |
| getTotalOrder                | GET    | School INEP, Cycle ID, Auth Token                                  | (Promise) Total order details       | `/order/school/:school_inep/:cycle_id/total`          |
| createOffer                  | POST   | Total Price, Supplier ID, Cycle ID, Offered Products, Total Order IDs, Auth Token | (Promise) Created offer details | `/offer/create`                                       |
| updateOffer                  | PUT    | Offer ID, Total Price, Supplier ID, Offered 
