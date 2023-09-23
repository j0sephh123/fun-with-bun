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

### Todo

- [] when hovering on an avatar add edit button so we dont have to do 2 steps do delete and then add an avatar

### In Progress

### Done

- [x] Enable creation of a project when avatar is not provided
- [x] when deleting an avatar from the gallery, close the dialog and refetch all projects
- [x] when creating a project, also allow the user to pick from gallery
- [x] when deleting a project image, do not delete the image from the gallery, just the relation
- [x] Upon clicking on a plus icon when hovering on a project image, pick an image from the gallery
