# Location Requests

List of all the requests for locations.

path: `'src/api/external/locationRequests.js'`

| Function           | Method | Arguments           | Return                                | API                      |
|--------------------|--------|---------------------|---------------------------------------|--------------------------------|
| getAllCities       | GET    | Auth Token               | (Promise) List of all cities           |        [IBGE](`https://servicodados.ibge.gov.br/api/v1/localidades/estados/AL/municipios`)         |
| getRegions         | GET    | Auth Token, City Name | (Promise) Immediate and Intermediate Regions | [IBGE](`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/2700300/distritos`) |
| getCep             | GET    | Auth Token, CEP       | (Promise) Address data                 | [ViaCEP](`https://viacep.com.br/ws/01001000/json/`) |
