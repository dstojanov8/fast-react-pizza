1. `App.jsx` containes new **router** from `createBrowserRouter` function. This function has all our application routes. By using this new way we can use Data Loaders (fetching data) and Actions.
2. As a wrapper for our whole application we are using `AppLayout` component. Here we defined our `Header` and `Footer` components (in this case `<CartOverview />`)
   - In our new router we are using this component as **parent route**
   - In this component we are using `<Outlet />` in order to render nested routes
3. In our `Menu.jsx` component we created our **Loader** function.
   - **Loader** is a function that fetches some data from an API. We then provide that **Loader** function to one of our _routes_ and that _route_ will then fetch that data as soon as the application goes to that route. Once the data has arrived, it will be provided to the page component itself using a custom hook.
   - 1. We place the **Loader** for a certain page inside the file of that page (menu loader in Menu Component)
   - 2. We use that **Loader** function inside our `App.jsx` file got `/menu/` route
   - 3. We use a custom hook `useLoaderData()` to get that data into the `Menu.jsx` component
   - **Loaders** use `render-as-you-fetch` strategy and replace _useEffect_ hook (`fetch-on-render`), **this is how data loading works in modern React Router**
4. In `AppLayout.jsx` we added logic for displaying loading indicator. With `useNavigation()` hook we can get the application state (idle, loading, submitting) and based on that we dispay a loading animation. If one of the pages is loading then the navigation state will become loading.
5. Handling an **_Error_** is displayed in `App.jsx` component in `createBrowserRouter`. In parent route we added `errorElement: <Error />` to indicate that the app should render `<Error />` component in case of an error. In `Error.jsx` component we are use `useRouteError()` hook to get the error message.
   - in case of an error inside the **Loader** (ex. Failed to fetch error) we want to have errorElement as well in the route where we use the **Loader**, therefore we put in in the `/menu` route as well.
   - errors bubble up so that is why we put errorElement in the parent route, we **_should_** always handle errors in the route it occured in
6. `SearchOrder.jsx` component is used to fetch a specific order, we use **_useNavigate_** hook to set query params
7. We also use a **_Loader_** function in `Order.jsx`. Here it is a little bit different as we are using params to fetch an object with an id, for more information chect `Order.jsx`
   - The othere process is the same as for `Menu.jsx`
