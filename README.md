# Canvas Triangles: Svelte Edition
The Canvas Triangles module is a Svelte library that features responsive triangles drawn on an HTML canvas. The design is adapted from the original painting by [Steve Galan](https://stevegalan.com/)
![Triangles](https://images.squarespace-cdn.com/content/v1/50987d02e4b07a4c81af6ca9/c7b303da-bfb2-4e9e-ab03-b521b3cdb8de/IMG_0210.JPG?format=2500w)
## Modular Design
The responsive element uses Svelte's eponymous component's *window* directive to update the canvas on the *resize* event. Could this have been achieved in  native JavaScript via the DOM API? ...yes.
As it stands, however, the module provides a single Svelete component, *Background*, that can take a prop, "numTriangles", to set the numer of triangles to draw along the horizonal (width) axis. Under the hood, Canvas Triangles calculates the base, height, and side length based on the browser window and this number.
Additionally, color is configurable via the "colors" prop, and plans to build animations for dynamic coloring are underway.
## Author
Jackson Galan