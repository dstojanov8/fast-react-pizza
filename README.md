# Project Overview

One of the main subjects of the project are **_Loaders_** and **_Actions_**. **_Loaders_** are used to read data, **_Actions_** are used to write/mutate data (state that is stored on the server).

- **_Loader_** example is in the _Code Guide_ numbers **_3. and 7._** (files `Menu.jsx` and `Order.jsx`).
- **_Action_** example is also in _Code Guide_ under number **_8._** (file `CreateOrder.jsx`).

- [Eslint configuration](docs/ESLINT_CONFIG.md)
- [Code Guide](docs/CODE_GUIDE.md)
- [Tailwind CSS](docs/TAILWIND_CSS.md)
- [Redux Overview](docs/REDUX.md)
- [React Router Advanced Features](docs/REACT_ROUTER.md)

## How to **plan** and **build** a React application

When we build lagre and more realworld applications:

1. Gather application **requirements and features**
2. Devide the application into **pages**
   - Think about the **overal** and **page-level** UI
   - Break the desired UI into **components**
   - Design thd build a **static** version (no state yet)
3. Devide the application into **feature categories**
   - Think about **state management + dataflow**
4. Decide on what **libraries** to use (technology decisions)

## 1. Business Requirements

1. Very simple application, where users can order one or more pizzas from a menu
2. Requires **no user accounts** and no login: users just input their names before using the app
3. The pizza menu can change, so it should be **loaded from an API**
4. Users can add multiple pizzas to a **cart** before ordering
5. Ordering requires just the **user's name, phone number and address**
6. If possible, **GPS location** should also be provided, to make delivery easier <-- INTERESTING FEATURE
7. User's caan **mark their order as "priority"** for an additional 20% of the cart price
8. Orders are made by **sending a POST request** with the order data (user data + selected pizzas) to the API
9. Payments are made on delivery, so **no payment processing** is necessary in the app
10. Each order will get a **unique ID** that should be displayed, so the **user can later look up their order** based on the ID
11. Users should be able to mark their order as "priority" order **even after it has been placed**

## (2, 3) Features, Pages and State Management

Feature Categories -> State Management -> Necessary pages:

1. User -> Global UI state (no accounts, so stays in app)
   - Homepage `/`
2. Menu -> Global remote state (menu is fetched from API)
   - Pizza menu `/menu`
3. Cart -> Global UI state (no need for API, just stored in app)
   - Cart `/cart`
4. Order -> Global remote state (fetched and submitted to API)
   - Placing a new order `/order/new`
   - Looking up an order `/order/:orderID`

## 4. **Tech Decisions:**

1. Routing: `React Router` (standard for React SPAs)
2. Styling: `Tailwindcss` (trendy way of styling applications)
3. Remote state management: `React Router` (new way of fetching data right inside React Router)
   - **render-as-you-fetch** instead of **fetch-on-render**
   - not really state **management**, as it doesn't persist state
4. UI state management: `Redux`
