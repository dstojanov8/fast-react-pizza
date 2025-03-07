For **_Global App State_** we use _Redux_ with _Redux Toolkit_. For this we created a `store.js` and added a **Provider** in `main.jsx`.

It the store we added the **User Reducer** we created in `userSlce.js`, check _userSlice_ file to see _reducers_ and _actions_. In `Cart.jsx`, `CreateOrder.jsx`, `CreateUser.jsx`, `Username.jsx` and `Home.jsx` we use _useSelector_ or _useDispatch_ to interact with the store.

We also added **Cart Reducer** to our store, _reducers_ and _actions_ are inside `cartSlice.js` file. Check _cartSlice_ to see **selector** functions that do calculations before returning the data. In `Cart.jsx`, `CartItem.jsx`, `CartOverview.jsx`, `DeleteItem.jsx`, `UpdateItemQuantity.jsx` and `MenuItem.jsx` we use _cartSlice_.
