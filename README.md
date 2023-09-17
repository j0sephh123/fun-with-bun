# Summary

Per usual, not sure.

# Stack

## Client - this repo

- [Bun](https://bun.sh/)
- React and Vite. Regarding React, at some point the intent is to re-write with different front end and compare. Hopefully we get there.
- [Daisy](https://daisyui.com/)
- [Valtio](https://valtio.pmnd.rs/)
- [Tanstack-query](https://tanstack.com/query/latest/docs/react/overview) - still not installed, not sure if I want to use it yet.

## Custom Server

- [elysia](https://elysiajs.com/).
- Not yet uploaded to github.
- Currently it is helping with uploads processing, although I'm not even sure if it is necessary in this case, but I learned a few things along the way, so it is already useful

## API

[strapi](https://strapi.io/)

- Not yet uploaded to github.
- It is using sqlite3. Depending on the enjoyment, I may switch to something else.

## Tasks

### Frontend

- [x] **Add a Modal for Creation of a Project**
  - [x] Implement modal structure
  - [x] Add form fields for project details
  - [x] Wire up form submission to API
- [ ] **Extract Input into a Component**
  - [ ] Identify common properties and behavior for the input component
  - [ ] Implement the input component
  - [ ] Replace existing input elements with the new component
- [ ] **Same for Button**
  - [ ] Identify common properties and behavior for the button component
  - [ ] Implement the button component
  - [ ] Replace existing buttons with the new component

### Backend & Frontend

- [ ] **Delete Functionality**
  - [x] Add boilerplate for delete icon
  - [x] Add API endpoint for deleting a project
  - [x] Implement frontend logic for deletion (confirmation dialog, API call)
  - [ ] Deleting a project should delete the associated media with it
- [ ] **Edit Name Functionality**
  - [ ] Add API endpoint for editing project name
  - [ ] Implement frontend logic for editing name (form, API call)
- [ ] **Edit Image Functionality**
  - [ ] Add API endpoint for editing project image
  - [ ] Implement frontend logic for editing image (file upload, API call)
- [ ] **Media Gallery View**
  - [ ] Design gallery layout
  - [ ] Fetch media items from API
  - [ ] Render media items in gallery layout
