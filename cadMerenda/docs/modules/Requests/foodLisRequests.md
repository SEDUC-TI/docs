# Food List Requests

This list encompasses all requests that involve food items (general list, order, offer, etc).

| Function                   | Method | Arguments                                      | Return                                           | API Route                                |
|----------------------------|--------|------------------------------------------------|--------------------------------------------------|------------------------------------------|
| fetchOffers                | GET    | Auth Token                                     | (Promise) List of offers                         | `/offer/`                                |
| getOfferById               | GET    | ID, Auth Token                               | (Promise) Offer details by ID                    | `/school-offer/:id`                      |
| getOffersBySupplier        | GET    | ID, Auth Token, CycleID                            | (Promise) Supplier offers                       | `/offer/supplier/:id/:cycleId`           |
| fetchOrderBySchool         | GET    | ID, Auth Token                                    | (Promise) List of orders by school              | `/order/school/:id`                      |
| createGeneralList          | POST   | Data, Auth Token                                    | (Promise) Created general list details          | `/general_list/create`                   |
| updateGeneralList          | PUT    | Data, Auth Token                                    | (Promise) Updated general list details          | `/general_list/update/:listId`          |
| getGeneralLists            | GET    | Auth Token                                          | (Promise) List of general lists                 | `/general_list/`                         |
| getGeneralListsByCycle     | GET    | CycleID, Auth Token                                  | (Promise) General lists by cycle                | `/general_list/cycle/:cycleId`          |
| getGeneralListFood         | GET    | ID, Auth Token                                      | (Promise) General list food details             | `/general_list_food/:id`                |
| getOrderByInep             | GET    | INEP, Cycle, Auth Token                        | (Promise) Order details by INEP and cycle        | `/order/school/:inep/cycle/:cycle`      |
| getGeneralListsByInep      | GET    | INEP, Cycle, Auth Token                     | (Promise) General lists by INEP and cycle        | `/general_list/school/:inep/cycle/:cycle`|
| updateOrder                | PUT    | Order, Auth Token                             | (Promise) Updated order details                 | `/order/:orderId`                       |
| createOrder                | POST   | Order, Auth Token  | (Promise) Success message for created order     | `/order/create`                         |
