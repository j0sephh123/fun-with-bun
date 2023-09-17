# Summary

Per usual, not sure.

# Stack

## Client - this repo

- [Bun](https://bun.sh/)
- React and Vite. Regarding React, at some point the intent is to re-write with different front end and compare. Hopefully we get there.
- [Daisy](https://daisyui.com/)
- [valtio](https://valtio.pmnd.rs/)
- will try NOT to use tanstack-query for this one

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

- [ ] **Add a Modal for Creation of a Project**

  - [ ] Implement modal structure
  - [ ] Add form fields for project details
  - [ ] Wire up form submission to API

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
  - [ ] Add API endpoint for deleting a project
  - [ ] Implement frontend logic for deletion (confirmation dialog, API call)
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
