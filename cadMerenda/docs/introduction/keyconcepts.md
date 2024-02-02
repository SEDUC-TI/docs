# Key concepts

Description of the main components of the system.

### Table of contents

- [Certificate](#certificate)
- [Cycle](#cycle)
- [General List](#general-list)
- [Modality](#modality)
- [Offer](#offer)
- [Order](#order)

----

## Cycle

The cycle is a set of dates that dictate the functioning of the system. The cycle is divided into four stages:


| Stage        | Actor       | Description                                                                                           |
|--------------|-------------|-------------------------------------------------------------------------------------------------------|
| General List | Nutritionist | The nutritionist creates and is able to update the general list in the specified period.             |
| Order        | School      | The school creates and is able to update the order in the specified period based on the general list linked to their modalities. |
| Offer        | Supplier    | The supplier creates and is able to update the offer in the specified period based on the orders.     |
| Visualization| School      | The school is able to visualize the 5 best offers in the specified period.                            |

For each of those stages, the system has a specific period in which the actors can perform their actions. The admin is responsible for setting the start and end dates of the cycle. 

### Restrictions based on the cycle

Depending on the actor, the system may be unavailable for some actions based on the cycle stage. The following list describes the restrictions for each actor:

1. **General List**
    - The nutritionist can create and update the general list in the specified period.
    - The school's view at this point says the application is closed.
    - The supplier's view at this point says the application is closed, but they can update their certificates.

2. **Order**
    - The school can create and update the order in the specified period based on the general list linked to their modalities.
    - The nutritionists can visualize the general list, but not update it.
    - The supplier's view at this point says the application is closed, but they can update their certificates.

3. **Offer**

    - The supplier can create and update the offer in the specified period based on the orders.
    - The nutritionists can visualize the general list, but not update it.
    - The school can view how many offers they have received, and an estimate for the next period.

4. **Visualization**

    - The school is able to visualize the 5 best offers in the specified period.
    - The nutritionists can visualize the general list, but not update it.
    - The supplier's view at this point says the application is closed, but they can update their certificates.

## Modality

A modality represents a category in which a school is classified. Each school can have one or multiple modalities. Modalities are used to filter the general list, allowing schools to view only the products that are relevant to them. 

For example, a full-time school may require breakfast, lunch, and dinner, while a half-time school may only require lunch. Each modality has its own list of products tailored to the specific needs of the school. As of today (2024-02-02), the list of modalities is fixed and cannot be updated by the admin.

The general list is automatically filtered based on the school's modalities, ensuring that schools only get the lists that are applicable to their category.

## General List

The term "General List" was chosen because it is a list that is general to all schools based on their modalities.

The **general list** is a list of products that the nutritionist creates. The nutritionist is responsible for creating and updating the general list in the specified period. Throughout the available period, the nutritionist can create a new general list or update the existing one. They simply pick the food items to be used in each modality menu (the menu itself **not** being in the scope of this solution, it is as of now sent by email or other means to the schools).

The general list is linked to the **current cycle**, meaning it will no longer be available after the cycle ends. The nutritionist can create a new general list for the next cycle.

## Order

The order is a list of products split by modality that the school creates. The school can create and update the order in the specified period based on the general list linked to their modalities. The school can only see the lists for the modalities they have.

For example, a General List for modality *A* may have products *1*, *2*, and *3*. The school can then create an order for modality *A* with quantities for products *1*, *2*, and *3*, the same happening for modality *B* and so on. The school may choose to order only some of the products from the general list according to the resources they have (such as storage, budget, etc). The school can also update the order throughout the available period.

## Offer

The offer is a list of prices that the supplier creates. The supplier can create and update the offer in the specified period based on the orders. Despite the order being split by modality, the offer is not. The supplier can create a single offer for all the products in the order. The supplier can also update the offer throughout the available period.

They only set the price and the brand for each product.

### Best offers (suppliers)

The system will automatically select the 5 best offers for each school based on the total price. The school can then visualize the 5 best offers in the specified period.

