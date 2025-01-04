# Project Overview

Front-end for a Pizza ordering app.

## How to **plan** and **build** a React application

For **one page and a few features** apps we can break this process into three steps:

1. Break the desired UI into **components**
2. Build a **static** version (no state yet)
3. Think about **state management + data flow**

When we build lagre and more realworld applications:

1. Gather application **requirements and features**
2. Devide the application into **pages**
3. Devide the application into **feature categories**

## Configure eslint

1. Run: `npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev`
2. Create: `.eslintrc.json` and add `{ "extends": "react-app" }`
3. Check `vite.config.js` on how to configure eslint (we will comment it out for now)

**In this project, and likely all the following, we don't need to do this as we do have `.eslintrc.cjs` configured but do check!**
