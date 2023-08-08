# 0.0.6 (2023-08-08)

- More vite fixes

# 0.0.5 (2023-08-08)

- Fixes the production build so the vite manifest file generates correctly

# 0.0.4 (2023-08-04)

- Adds a New Builder Class for Containers and Refactors the Page Builder to use it. This change also refactors a lot of code to make it more reusable.
- Stores the data as an array, rather than JSON.
- Update the PageRender controller to use the new method in the PageService
- Fix a typo with the Containers and handle when there are no containers.s

# 0.0.3 (2023-07-23)

- Adds better handling for displaying on a smaller screen with tailwind breakpoints.
- Adds a container for the elements which are displayed on the page.

# 0.0.2 (2023-07-09)

- Adds a static method to return a list of the pages which have been created.
