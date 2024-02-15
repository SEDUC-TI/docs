# PrivateRoute

The PrivateRoute component is a utility component used for conditional rendering of child components based on the user's role and authentication status.

## How it works

1. The PrivateRoute component receives the following props:

- `children`: The child components to be rendered within the PrivateRoute.
- `roles`: An array of strings representing the roles allowed to access the route.
- `restricted`: A boolean indicating whether access to the route is restricted based on additional conditions.

2. Inside the component, it utilizes React hooks such as `useEffect` and `useNavigate` from _'react-router-dom'_, and `useAuthUser` from _'react-auth-kit'_ to access routing and authentication functionalities.

3. It checks if the user's role is included in the specified roles allowed for accessing the route. If not, it redirects the user to the appropriate route based on their role using the `navigate` function.

4. If the user's role is 'fornecedor' and access to the route is restricted (`restricted` prop is true), it further checks if the current cycle status allows access. If not, it renders a `<Closed />` component indicating that access is restricted.

5. Finally, it renders the child components passed to it if all access conditions are met.

## Usage

The PrivateRoute component is used in the `Routes` component to conditionally render the appropriate child components based on the user's role and authentication status.

```jsx

    <PrivateRoute path="/admin" roles={['admin', 'admin-nutri']}>
        <Home />
    </PrivateRoute>

```