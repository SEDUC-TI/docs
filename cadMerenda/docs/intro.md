---
sidebar_position: 1
---

# Getting started

<div style={{display: 'flex', alignItems: 'center'}}>
  <div>
    ![Research illustration](../static/img/undraw_researching.svg)
  </div>
  <p>
  Welcome to the CadMerenda documentation! This documentation aims to help you understand the application and its codebase. We will discuss the application's premise, its key concepts, and the actors and their interactions.
  </p>
</div>


### Table of contents

- [What *is* CadMerenda anyway?](#what-is-cadmerenda-anyway)
  - [The issue](#the-issue)
  - [The solution](#the-solution)
  - [The application](#the-application)
  - [What's next?](#whats-next)

## What *is* CadMerenda anyway?

This section aims to discuss the application and elaborate on how CadMerenda works and what is its premise. We will describe the issue and work our way into the solution. Understanding what the application is trying to achieve is just as important as understanding how the code works.

### The issue

The process of purchasing food for schools used to be manual. The head of the school had to find the suppliers and negotiate with them directly throughout the entire process. There was no database of available suppliers willing to supply for that school. Out of convenience, the head of the school could agree to purchase with the same company every time.

This leads to some complications, such as the State not having control over what the school is purchasing, whom they're purchasing it from, and whether they could've purchased somewhere else with lower prices.

### The solution

The nutritionist in charge of the menu for the state requested us (SUITEC) to develop a system that would allow schools to register their demand for food and suppliers to register their supply of food. The system would then match the demand with the supply and allow the school to purchase from the supplier.

The school's demand would be based on the menu the nutritionist created. The system would then match the demand with the supply and show a list of the 5 best suppliers for the school to purchase from, in a way that the schools can choose the supplier that best fits their needs and have access to better brands and prices.

### The application

It was developed using **MySQL**, **Node.js**, and **React**. The backend is a REST API that uses **Express.js** and the frontend is a single-page application that uses **React JS + VITE**.

You can learn more about the actors and their interactions in the upcoming sections.

#### Overview

The flow of the application is as follows:

1. The nutritionist creates a menu for the school based on the modality of the school.
2. The school registers its demand for food based on the menu.
3. The supplier registers its supply of food for each selected school.
4. The system matches the demand with the supply and shows a list of the 5 best suppliers for the school to purchase from.

### What's next?

Now that you understand the premise of the application, you can move on to the next section to understand the key concepts of the application. This will help you understand the application's structure and how the code works.

If you're interested in learning more about the actors and their interactions, you can move on to the next section to understand the actors and their interactions. This will help you understand the application's structure and how the code works.