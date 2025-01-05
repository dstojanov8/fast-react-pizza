1. `App.jsx` containes new **router** from `createBrowserRouter` function. This function has all our application routes. By using this new way we can use Data Loaders (fetching data) and other features.
2. As a wrapper for our whole application we are using `AppLayout` component. Here we defined our `Header` and `Footer` components (in this case `<CartOverview />`)
   - In our new router we are using this component as **parent route**
   - In this component we are using `<Outlet />` in order to render nested routes
3. In our `Menu.jsx` component we created our **Loader** function.
   - **Loader** is a function that fetches some data from an API. We then provide that **Loader** function to one of our _routes_ and that _route_ will then fetch that data as soon as the application goes to that route. Once the data has arrived, it will be provided to the page component itself using a custom hook.
   - We place the **Loader** for a certain page inside the file of that page (menu loader in Menu Component)
   - We use that **Loader** function inside our `App.jsx` file got `/menu/` route
   - We use a custom hook `useLoaderData()` to get that data into the `Menu.jsx` component
   - **Loaders** use `render-as-you-fetch` strategy and replace _useEffect_ hook (`fetch-on-render`), **this is how data loading works in modern React Router**
