# user-list

Just an example of usage React and Redux based on table of users

### Stack

- ReactJS
- Redux Toolkit
- TypeScript
- Styled-components

### Usage

On page load we're getting list of users from `https://jsonplaceholder.typicode.com/`.
Then we're parsing it and set into `Redux` store. Table is rendering and we get three components:

- App (root component)
- Table
- Header

We can select single row or select all of rows from table by checkbox in `Header`.
When state of checked rows updates we set it into store and after all we have two structures
in our store - `initial users` and `selected users`.
