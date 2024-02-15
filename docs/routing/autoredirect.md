# Auto Redirect

The AutoRedirect component is a utility component used for conditional rendering of child components based on the authentication status.

## How it works

1. The AutoRedirect component utilizes the `useIsAuthenticated` hook from the 'react-auth-kit' library to determine if the user is authenticated.

2. It also uses the `useNavigate` hook from the 'react-router-dom' library to access the navigation functionalities.

3. Upon component mount (using the `useEffect` hook), it checks if the user is authenticated. If the user is authenticated, it retrieves the user's role from the local storage.

4. It then maps the user's role to specific routes using a predefined set of role routes.

5. If the user's role matches one of the predefined role routes, it automatically redirects the user to the corresponding route using the navigate function.

6. If the user is not authenticated or their role does not match any predefined role routes, no redirection occurs and it's handled by the PrivateRoute component.

