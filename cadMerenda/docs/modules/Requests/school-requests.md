# School Requests

List of all the requests for schools.

path: `'src/api/schoolRequests.js'`

| Function                     | Method | Arguments                                         | Return                                                   | API Route                                              |
|------------------------------|--------|---------------------------------------------------|----------------------------------------------------------|--------------------------------------------------------|
| fetchSchools                 | GET    | Auth Token                                        | (Promise) List of schools                                | `/school/`                                             |
| createSchool                 | POST   | School, Auth Token                                | (Promise) Created school details                         | `/school/`                                             |
| fetchSchoolAccess            | GET    | Auth Token                                        | (Promise) List of school accesses                        | `/user-access`                                         |
| getSchoolById                | GET    | ID, Auth Token                                    | (Promise) School details by ID                           | `/school/:id`                                          |
| getFullSchoolInfo            | GET    | ID, Auth Token                                    | (Promise) Full school information                        | `/school/SchoolInfo/:id`                               |
| getSchoolByCity              | GET    | City, Auth Token                                  | (Promise) School details by city                         | `/school/city/:city`                                   |
| fetchOffers                  | GET    | Auth Token                                        | (Promise) List of all offers                          | `/school-offer`                                        |
| fetchOffersByInep            | GET    | Params `{ inep, id: cycleId }`, Auth Token           | (Promise) Offers by school and cycle                | `/offer/school/:inep/:cycleId`                          |
| getGeeById                   | GET    | ID, Auth Token                                    | (Promise) GEE details and linked schools by ID                              | `/gee/:id`                                             |
| fetchCountOffersByInep       | GET    | Params `{ inep, id: cycleId }`, Auth Token           | (Promise) Count of offers for specified INEP by cycle       | `/offer/school/count/:inep/:cycleId/total`             |
| fetchAllModalities           | GET    | Auth Token                                        | (Promise) List of all modalities                         | `/modality`                                            |
| getOrderBySchool             | GET    | ID, Auth Token                                    | (Promise) Mapped order details by school                | `/order/school/:id/:cycle`                             |
| getGeeList                   | GET    | Auth Token                                        | (Promise) List of GEEs                                   | `/gee`                                                 |
| getModalityByInep            | GET    | INEP, Auth Token                                  | (Promise) Modalities by INEP                             | `/school_modality/school/:inep`                        |
| downloadReport               | GET    | INEP, Auth Token, CycleID                          | (Void) Downloads best supplier report                                | `/download/report/:inep/:cycleId`                      |
| getAllGees                   | GET    | Auth Token                                        | (Promise) List of all GEEs                               | `/gee`                                                 |
| updateSchool                 | PUT    | School, Auth Token                                | (Promise) Updated school details                         | `/school/:inep`                                        |
| addModality                  | POST   | Data, Auth Token                                  | (Promise) Added modality details                         | `/school_modality/create`                              |
| deleteModality               | DELETE | Data, Auth Token                                  | (Promise) Deleted modality details                       | `/school_modality`                                     |
