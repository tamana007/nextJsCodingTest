# Test instructions

You will create a simple responsive form that will create an order when the necessary
information is submitted to the backend REST API.

## Grading

- Functionality
  - Were all the tasks completed?
  - Are all the core functionalities working properly?
- Completion time
  - There is **no** time limit. However,
  - The speed at which you submit your work affects your work favourably **but
    not at the cost of functionality**.
  - An incomplete/not-working submission is better than not attempting it at all
- Visual appearance
  - We are not expecting anything earth-shattering.
  - This is a front-end position, so the you should demonstrate a solid understanding
    of how to set up a simple page while exercising best practices.
  - It is up to you to choose how much time you want to sacrifice to improve the
    appearance. The amount of time it takes and a functional appearance are both
    important.

## Tasks

### Project setup

1. With the supplied Git repo, create a new branch from `master` called `test`.
   - You will commit all your work to this branch.
2. You will find that there exists a `backend` project in the root directory.
   You will create a Next.js 13 app that will reside in the same directory as the
   backend project with the following configuration:
   - Name the project `frontend`.
   - Use TypeScript.
   - Use ESLint.
   - Do not use Tailwind CSS.
   - Do not use the `src/` directory.
   - Do not use the App Router.
   - You can choose whether or not you want to customize the default import alias.
3. You should now have a `backend` folder and a `frontend` folder in the same directory.

### Front-end

1. Create a vertically and horizontally centered form (it should render to be in
   the middle of the screen). The form should contain the following fields:
   - Billing first name
   - Billing last name
   - Billing phone
   - Billing email
   - A "Billing is the same as shipping" checkbox
     - The checkbox should be checked by default
     - If the checkbox is unchecked, show the following additional fields:
       - Shipping first name
       - Shipping last name
       - Shipping phone
       - Shipping email
   - Submit button
     - If clicked, a fetch request should be sent. See **Functionality** below
       for more information.
2. Make the form responsive.
   - If the screen size is less than `1024px`, render all the fields in a single
     column, each in their own row.
   - If the screen size is greater than or equal to `1024px`, render the "first
     name" and "last name" fields in the same row.

### Functionality

1. Make sure the backend REST API is running. Review its `README.md` file for
   more information.
2. Make a fetch request to the backend's REST API to create a new order with the
   necessary information.
   - The backend's REST API requires a secret API key. This secret API key must
     not be exposed to the user. You can find this key in the backend project's
     `README.md` file.
3. Once the request has been successfully made, fetch for and display the data
   using the order ID returned in the response. Refer to the `README.md` file in
   the backend project for information on its endpoints.

### Merging

1. Once you are ready to submit your work, make sure all your changes have been
   committed and pushed to your `test` branch.
2. Merge your changes in the `test` branch into `master` and push.
