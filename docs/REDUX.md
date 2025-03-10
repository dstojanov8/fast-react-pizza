For **_Global App State_** we use _Redux_ with _Redux Toolkit_. For this we created a `store.js` and added a **Provider** in `main.jsx`.

It the store we added the **User Reducer** we created in `userSlce.js`, check _userSlice_ file to see _reducers_ and _actions_. In `Cart.jsx`, `CreateOrder.jsx`, `CreateUser.jsx`, `Username.jsx` and `Home.jsx` we use _useSelector_ or _useDispatch_ to interact with the store.

We also added **Cart Reducer** to our store, _reducers_ and _actions_ are inside `cartSlice.js` file. Check _cartSlice_ to see **selector** functions that do calculations before returning the data. In `Cart.jsx`, `CartItem.jsx`, `CartOverview.jsx`, `DeleteItem.jsx`, `UpdateItemQuantity.jsx` and `MenuItem.jsx` we use _cartSlice_.

A **_Redux Thunk_** is used for fetching user address in this project. To see the example take a look in `userSlice.js` where we used `createAsyncThunk()` function. We used a **Redux Toolkit** way of creating a _Thunk_ function. _Thunk_ function is the code we want to execute as soon as the action is dispatched. The return from our thunk function becomes the _payload_.

Function `createAsyncThunk()` will create 3 additional action types: one for _pending_ promise state, one for the _fulfilled_ state and one for the _rejected_ state. We need to handle each state separately back in our reducers. This is how we then connect this Thunk with our reducers, see **_extraReducers_** in `userSlice.js`. Also take a look in `CreateOrder.jsx` to see how we use `fetchAddress()` action insida **dispatch**. Also error and status is added for the different states we get with our _thunk_.
