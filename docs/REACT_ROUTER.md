**_Advanced features of React Router: Fetching and Mutating data without causing navigations, so without movig to another page._**

Sometimes we need to fetch some data from another route, data that is not associated with the current page And we want to do that without causing a navigation.

Eg. In the `Order.jsx` page we wanted to load the Menu data again and we already wrote all the logic for fetching exactly that data, but it is associated to another route(to the Menu route). We want to use it here because there is no point in writing that logic again. In other words, we want to use the data from the menu route but without the user actually going there. **_For that we can use `useFetcher` hook._**

`const fetcher = useFetcher();`
`useEffect(() => {`
`   if (!fetcher.data) fetcher.load("/menu");` - we are only fetching if there is no data yet
`}, []);`

Here at component mount we are fetching Menu data form _/menu_ route. This will load the data and store it in the fetcher object. Later we can retrieve the data when we want.

Just like normal page navigations **fetcher** can also be in different states (_idle_, _loading_ and _submitting_).

To get the data we use `fetcher.data`.

**_We can do the same thing but with "writing", so updating data using a form (router action) but without causing a new navigation_**

In this case we don't use `featcher.load` but instead we use a **Form** somponent that the _fetcher_ provides to us. In `UpdateOrder.jsx` component we are wrapping our **Button** with a `<fetcher.Form></fetcher.Form>` even without any input elements. This **Form** is just like the **Form** we worked with from `react-router-dom`, only difference is that submitting a **Form** from _featcher_ won't cause a navigation. This will submit the form and **_revalidate_** the page.

**_Revalidation_** means that React Router knows that the data has changed as a result of an _action_. Whenever that happens it will _automatically re-fetch_ the data in the background and then _re-render_ the page with that new data.
