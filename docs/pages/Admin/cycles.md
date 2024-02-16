# Cycles Page

This page allows users to manage cycles. Users can create new cycles, edit the current active cycle, and view cycle information.

|         |                           |
|------------|--------------------------------------|
| **Route**      | `/admin/ciclo`      |
| **Component**  | `<Cycles />`                      |
| **Filepath**       | `src/pages/Admin/Cycles/Cycles.jsx` |

## Dependencies

- React
- react-auth-kit
- primereact/button
- primereact/confirmdialog
- primereact/inputtext

## Properties

### State Variables

- `disableButtons`: Holds the state of button disablement.
- `id`: Holds the ID of the current cycle.
- `createVisible`: Holds the visibility state of the create cycle dialog.
- `editVisible`: Holds the visibility state of the edit cycle dialog.
- `cycleData`: Holds the data of the current cycle.
- `passwordRef`: Ref for storing the password input value.

### Hooks

- `useAuthUser`: Custom hook for accessing authentication user data.
- `useToast`: Custom hook for displaying toast notifications.

### Functions

- `handleCreate`: Handles the creation of a new cycle.
- `accept`: Sets the edit dialog visible upon confirmation.
- `confirmEdit`: Shows a confirmation dialog for editing the current cycle.
- `handlePassword`: Handles the password input for creating a new cycle.
- `checkCreateCycle`: Checks whether to create a new cycle or not based on the current cycle state. If there's an active cycle, it will ask for the user's password as confirmation to create a new cycle.
- `saveChanges`: Saves changes made to the current cycle.

### Render

- Displays the page title.
- Renders a stepper component for displaying cycle dates.
- Renders buttons for creating a new cycle and editing the current cycle.
- Displays the table of cycle dates.
- Renders dialogs for creating and editing cycles.

---

## Specific Components

### CreateCycleDialog

The create cycle dialog component allows admin users to create a new cycle.

| Prop Name | Type                           | Description                |
|-----------|--------------------------------|----------------------------|
| `visible` | bool (required)                | Determines the visibility of the create cycle dialog |
| `setVisible` | func (required)             | Function to set the visibility of the create cycle dialog |
| `handleCreate` | func (required)           | Function to handle the creation of a new cycle |

**Dependencies:**

- primereact/dialog
- primereact/calendar
- @mui/icons-material/Warning

**How it works:**

1. Maps a predefined array of `cyclePieces` into a label and a calendar input component for selecting the start and end dates of the new cycle.
2. Call the `handleSave` on submit
3. Verify if any of the dates are empty, if so, display an error message.
4. Verify if any of the dates overlap with each other (if any of the start dates are lesser than their previous end dates), if so, display an error message.
5. Format the body for the request and set the start date time to 00:00:00 and the end date time to 23:59:59.
6. Send the body to the `handleCreate` function.

---

### EditCycleDialog

The edit cycle dialog component allows admin users to edit the current active cycle.

| Prop Name | Type                           | Description                |
|-----------|--------------------------------|----------------------------|
| `visible` | bool (required)                | Determines the visibility of the edit cycle dialog |
| `setVisible` | func (required)             | Function to set the visibility of the edit cycle dialog |
| `cycleData` | object (required)            | The data of the current cycle |
| `handleSaveChanges` | func (required)             | Function to save changes made to the current cycle |

**Dependencies:**

- primereact/dialog
- primereact/calendar

**How it works:**

1. Maps the `cycleData` object into a label and a calendar input component for selecting the start and end dates of the current cycle.
2. Call the `handleSaveChanges` on submit
3. Verify if any of the dates overlap with each other (if any of the start dates are lesser than their previous end dates), if so, display an error message.
4. Format the body for the request and set the start date time to 00:00:00 and the end date time to 23:59:59.
5. Send the body to the `handleSaveChanges` function.


### Stepper

The stepper component displays the cycle dates in a horizontal timeline.

| Prop Name | Type                           | Description                |
|-----------|--------------------------------|----------------------------|
| `dates`   | array of objects (required)  | Array of cycle dates       |

**How it works:**

1. Maps the cycle dates to the Step component and places them over a horizontal line to represent the timeline.

### Step

The step component represents a single cycle date in the stepper. 

| Prop Name | Type                           | Description                |
|-----------|--------------------------------|----------------------------|
| `title`   | string (required)              | The title of the step      |
| `start`   | string (required)              | The start date of the step |
| `end`     | string (required)              | The end date of the step   |
| `state`   | string (required)              | The state of the step      |

**How it works:**

1. Render a Circle component with the state color.
2. Render the title and date range of the step.

### Circle

The circle component represents the state of the cycle date in the stepper. It has three states: 'PENDING', 'FINISHED', and 'OPEN'.

| Prop Name | Type                           | Description                |
|-----------|--------------------------------|----------------------------|
| `status`   | string (required)              | The status of the circle    |

**How it works:**

1. Renders a circle with the color based on the status.



