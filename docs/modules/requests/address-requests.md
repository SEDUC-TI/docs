# Address Requests

List of all the requests for addresses.

path: `'src/api/addressRequests.js'`


| Function           | Method | Arguments                       | Return                                      | API Route                        |
|--------------------|--------|---------------------------------|---------------------------------------------|----------------------------------|
| getAddressById      | GET    | Address ID, Auth Token                        | (Promise) Address details                   | `/address/:id`                   |
| createAddress       | POST   | Address                         | (Promise) Created address details           | `/address/`                     |
| updateAddress       | PUT    | Address ID, Auth Token                   | (Promise) Updated address details           | `/address/:id`                   |
