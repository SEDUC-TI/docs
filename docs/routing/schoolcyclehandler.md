# SchoolCycleHandler

The SchoolCycleHandler component is a React component responsible for managing the display of different components based on the current cycle status in a school environment.

## How it works

1. The SchoolCycleHandler component accesses the current cycle data using the `useCycle` hook from the `CycleContextProvider`.

2. It uses the useEffect hook to update the local storage with the current cycle ID whenever the cycle data changes.

3. Depending on the cycle status, the component conditionally renders different child components:

    - If there is no cycle data available, it displays a `<CircularProgress/>` component indicating that the cycle data is being loaded.

    - If the school cycle is **'OPEN'**, it renders the `<SchoolOrder/>` component, indicating that orders can be placed.

    - If the supplier cycle is **'OPEN'**, it renders the `<SchoolHome/>` component, providing information about the school.

    - If the view cycle is **'OPEN'**, it renders the `<BestSuppliers/>` component, displaying the best suppliers available.

    - If the supplier cycle is **'FINISHED'**, it renders the `<SoonToView/>` component, indicating that the data will be available soon.

    - If none of the above conditions are met, it renders the `<Closed/>` component, indicating that the cycle is closed.