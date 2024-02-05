# Cycle Requests

List of all the requests for cycles.

path: `'src/api/cycleRequests.js'`

| Function           | Method | Arguments           | Return                                | API Route                      |
|--------------------|--------|---------------------|---------------------------------------|--------------------------------|
| getCycles          | GET    | Auth Token               | (Promise) List of cycles              | `/cycle`                       |
| getCycleById       | GET    | Cycle ID, Auth Token           | (Promise) Cycle details by ID         | `/cycle/:id`                   |
| getLatestCycle      | GET    | Auth Token               | (Promise) Latest cycle details        | `/cycle/last/desc`             |
| postCycles         | POST   | Cycle, Auth Token        | (Promise) Created cycle details       | `/cycle/create`                |
| updateCycles       | PUT    | Cycle, Auth Token        | (Promise) Updated cycle details       | `/cycle/:id`                   |
