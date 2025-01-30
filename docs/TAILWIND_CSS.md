In this project we will be using Tailwind CSS to style our application. It is a "Bootstrap CSS" like framework for styling the UI.

The Good:

1. **You do't need to think about class names**
2. **No jumping between files to write markup and styles**
3. Immediately understand styling in any project that uses tailwind
4. Tailwind is a design system: many design decisions have been taken for you, which makes UIs look better and more consistent
5. Saves a lot of time, e.g. on responsive design
6. Docs and VS COde integration are great

The Bad:

1. **Markup (HTML or JSX) looks very unreadable**, with lots of class names (you get used to it)
2. You have to learn a lot of class names (but after a day of usage you know fundamentals)
3. You need to install and set up tailwin on each new project
4. You're giving up on "vanilla CSS"

To use **Tailwind** we need to follow all the necessary steps from the documentation. In our case we are using _Vite_ for _React_ and we followed all the steps provided.

1. Run: `npm install -D tailwindcss postcss autoprefixer`
2. Run: `npx tailwindcss init -p`
3. Into **_tailwind.config.js_** copy `content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],`
4. Add to the top of **_index.css_** the following three lines
   - `@tailwind base;`
   - `@tailwind components;`
   - `@tailwind utilities;`
5. Install **_Tailwind CSS IntelliSense_** VS Code extension
6. Install prettier extensionL `npm install -D prettier prettier-plugin-tailwindcss`
   - create a prettier config file `.prettierrc` and add `{ "plugins": ["prettier-plugin-tailwindcss"] `}
   - all steps can be found on link: https://github.com/tailwindlabs/prettier-plugin-tailwindcss

# Tailwind usage

On the officia website always check what you want to style. Tailwind classes can be used in JSX as well as in HTML (check `index.html`)

### Color

If we search for **Text Color** there we can see examples like `text-{color}` where we specify the color and the itensity. We can also add opacity, we can add transparency and much more. The same can be applied to **Background Color**. Color styling can be found in `Home.jsx` and `Header.jsx`. In this case we used yellow (name) and 500 (intensity). Also see `CartOverview.jsx`.

### Text Styling

Most common is defining font size and font weight, we also use positioning (_text-center_). Search **Font Size** to see all the classes to style the size of text, we used `text-xl` in out `Home.jsx` component. The same goes for **Font Weight**, we used `font-semibold`. In `Header.jsx` we used _uppercase_ and _tracking-widest_ (this is for letter spacing).

**_In case we need to use a different value that widest for letter spacing we can set it up like this: `tracking-[5px]`_**. We can use **px** pr **ram**, it is all up to us. **_This can be applied to other syles, like font size._**

### Box Model: Spacing, Borders and Display

We add _margin_ with `mb-4`, this means margin bottom with value of 1rem (16px). Take a look for other class names in the docs. _Padding_ works the same way. E.g. `my-10` is margin top and bottom with value 2.5rem (y indicates y-axis). Check examples in `Header.jsx`.

_Border_ example can be seen in `Header.jsx`. We write _border-b_ to add a border 1px width, width can be changed (_border-b-8_). _Border_ color is set the same way as for text _border-stone-500_.

To add spacing between child elements, on the parent we use `space-x-4` (x for x-axis direction and 4 for value)

For **Dispay** we would just write: `flex`, `grid` etc. We have an example of using `hidden` in `Username.jsx` component where we hide a div on small screens.

### Responsive Design

By default Tailwind comes with 5 breakpoints, they are mobile first. There is a whole section in Tailwind docs `Core Concepts > Responsive Design`. We basically prefix any of the tailwind class names with one of the **_breakpoint prefixes_**

- `sm`: 640px => class will be applied when size greater than
- `md`: 768px => class will be applied when size greater than
- `lg`: 1024px => class will be applied when size greater than
- `xl`: 1280 => class will be applied when size greater than
- `2xl`: 1536 => class will be applied when size greater than

In `Home.jsx` we have `sm:my-16` **_Whenever the width is greater than 640 `my-16` will override the default value_**. Default classes, without any prefix, are mobile first classes. They apply only if there is no breakpoint overriding them.

## Tailwind Layouts

### Flexbox

In `CartOverview.jsx` we implemented Flexbox by using `flex items-center justify-between`. In `Username.jsx` we have example with `md:block` which is just `display: block;` on a certain width.

### Grid

In `AppLayout.jsx` we are using grid layout. As an example we can set class names `grid grid-rows-3`, where we are creating three rows of the same size.

What we will be using is `grid h-screen grid-rows-[auto_1fr_auto]`

- `grid` set display: grid;
- `grid-rows-[auto_1fr_auto]` we are deifing a number of rows (3) and their height, with `auto` our top and bottom row will adjusts its height to fit its content.
- `h-screen` sets the height to 100vh, in our case the middle row (1rf) will epxand to fill remaining available space. (check docs for additional height values)

We used `scroll-auto` on the <main> element so when whe height is to small for the content we are forced to scroll. This also leaves the footer of the page on screen, whereas before we had to scroll to the bottom to see the footer. To center the content in <main> we used `mx-auto`, adds margin on the left and right.

### Element States and Transitions

- **Hover state**: In `Cart.jsx` we used `hover:` and specify a class name to apply, in our case `text-blue-600`

- **Transition**: To add we specify `transition-all` or in our case `transition-colors` since we change color on state change. Do add diration we use `duration-300` for 300 milliseconds

- **Focus**: In `CreateOrder.jsx` we use `focus:` and we set `focus:outline-none` and add `focus:ring`. Later the same way we set color to _ring_ and `focus:ring-yellow-400 focus:ring-offset-2`.**_Ring_** is an important concept in **Focus**

- **Active**: Example for active state is `active:bg-blue-400`, here we just set color

- **Disabled**: For disabled state we use `disabled:cursor-not-allowed`

## Styling Forms

Check `SearchOrder.jsx` there we added a lot of css: focus state with transition and a ring. We also use `sm:focus:w-72` where we combine prefixes (change to withd on focus only happens when width is greater than 640px)

- **Border radius**: _rouded-[some value]_, we used `rounded-full` to a get pill shape

- **Placeholder text**: `placeholder:text-stone-400` we can style other thigs not just color

## Reusing styles with @apply

In `index.css` we specify a **_layer component_** where we can define custom class names by combining Tailwinds and reuse them. In this case we created **input** and reused it in `CreateOrder.jsx`.**_This should be utilized too often as it misses the point of Tailwind_**

Another way to reuse styles is to create components with all the styles listed there. Check `Button.jsx` component.
