# User Requests

List of user-related requests

path: `'src/api/userRequests.js'`

| Function                | Method | Arguments                       | Return                          | API Route                                          |
|-------------------------|--------|---------------------------------|---------------------------------|----------------------------------------------------|
| fetchUsers              | GET    | Auth Token                      | (Promise) List of users        | `/user-and-school/`                                 |
| getUserById             | GET    | User ID, Auth Token             | (Promise) User details         | `/user/:id`                                         |
| createUser              | POST   | User details, Auth Token        | -                               | `/user`                                            |
| checkExistingUser       | POST   | Email                           | (Promise) -                     | `/supplier/verify`                                  |
| deleteUser              | DELETE | User ID, Auth Token             | (Promise) Deleted user details | `/user/:id`                                         |
| verifyUser              | GET    | Auth Token                      | (Promise) Verification details | `/verify`                                          |
| editUser                | PUT    | User ID, User details, Auth Token| -                               | `/user/:id`                                         |
| login                   | POST   | User details                    | (Promise) User details         | `/login`                                           |
| sendEmail               | POST   | Email                           | (Promise) Success message      | `/forgot-password/token`                            |
| requestPasswordChange   | POST   | Email                           | (Promise) Success message      | `/forgot-password/token`                            |
