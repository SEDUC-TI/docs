# Toast Context

The ToastContextProvider component is a React context provider responsible for managing toast notifications within the application.

## Use Case

The ToastContextProvider offers a convenient way to display informative messages to the user. It encapsulates the logic for displaying various types of toasts, providing a consistent and efficient approach for showing feedback, errors, or other notifications to users across different parts of the application. This component enhances the user experience by providing timely and relevant feedback in response to user actions or system events, contributing to a more intuitive and responsive application interface.

## How it works

1. The `ToastContextProvider` component utilizes the `useRef` hook to create a reference to the PrimeReact Toast component, enabling programmatic control over its display.

2. It defines methods for displaying different types of toasts, such as `showToast`, `showSuccessToast`, `showErrorToast`, `showInfoToast`, and `showContentToast`, each accepting parameters for severity, summary, detail, message, title, and content.

3. These methods utilize the show method of the PrimeReact Toast component to display toast notifications with the specified severity, summary, detail, message, title, or content for a specified duration (life).

4. The context value containing these toast methods is memoized using the `useMemo` hook to prevent unnecessary re-renders.

5. The context value is provided to its child components using the `ToastContext.Provider`.

6. Child components can access the toast methods using the useToast custom hook, which internally utilizes the useContext hook to retrieve the toast context.
