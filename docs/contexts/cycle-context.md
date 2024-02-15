# Cycle Context

The `CycleContextProvider` component is a React context provider responsible for managing and providing cycle-related data to its child components.

The CycleContextProvider component is designed to manage the retrieval, parsing, and storage of cycle data obtained from an external API. It leverages React context to make the cycle data available throughout the component tree, allowing child components to access and utilize this data as needed.

## Use case

The CycleContextProvider component serves as a central hub for managing cycle-related data and making it accessible to various components within a React application. It encapsulates the logic for fetching, parsing, and storing cycle data, providing a clean and organized way to handle cycle-related functionalities. This component is particularly useful in applications where multiple components need access to cycle data, ensuring consistency and efficiency in data management and sharing.

## How it works

1. The CycleContextProvider component utilizes the `useAuthUser` and `useIsAuthenticated` hooks from the *'react-auth-kit'* library to determine the user's authentication status and retrieve authentication-related information.

2. It utilizes the useState hook to manage the state of the raw cycle data obtained from the API (`rawCycle`), the parsed cycle data (`parsedCycle`), and a boolean flag indicating whether data fetching is complete (isDataFetched).

3. Upon component mount, it triggers an asynchronous data fetching process (`fetchData` function) to obtain the latest cycle data from the API using the getLatestCycle function.

4. Once the cycle data is fetched successfully, it stores the cycle ID in the local storage and updates the state variables (`rawCycle`, `isDataFetched`) accordingly.

5. It utilizes the `useEffect` hook to parse the raw cycle data (`rawCycle`) into a more usable format using the `cycleParser` utility function and updates the `parsedCycle` state variable accordingly.

6. It creates a memoized context value containing the parsed cycle data and the cycle ID obtained from the local storage.

7. It provides the context value to its child components using the `CycleContext.Provider`.

8. Child components can access the cycle data using the `useCycle` custom hook, which internally utilizes the `useContext` hook to retrieve the cycle context.