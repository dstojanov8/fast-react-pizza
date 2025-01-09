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

## Tailwind usage

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
