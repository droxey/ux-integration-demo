# ux-integration-demo
  Integrate node, express, and handlebars with a pre-existing, templated UX downloaded from Envato Elements.

## the process:
  A few fundamental changes, detailed below, were made to include a bare-bones HTML page:
  1. Create a `ux` folder within the `public` directory where static assets are served.
  1. Find the provided HTML template in the downloaded .zip file from Envato Elements.
  1. Copy and paste the following folders in your new `public/ux` directory:
    * `css`
    * `img`
    * `js`
  1. Open `index.html` in your editor and copy the contents.
  1. Open `main.handlebars` in the `views/layouts` folder.
  1. Paste the contents `index.html` into `main.handlebars`. This should replace any previously existing HTML.
  1. Update HTML with the appropriate file paths:
    * Check `<script>` tags, updating the `src` attribute, prepending `ux/` to the beginning of the string.
    * Check `<link>` tags, updating the `href` attribute, prepending `ux/` to the beginning of the string.
    * Check `<img>` tags, updating the `src` attribute, prepending `ux/` to the beginning of the string.
  1. Add any additional CSS before the `</head>` tag. Add any additional JS files before the `</body>` tag.
  1. Save the file.
  1. Run `node server.js` to observe your new UX!
  
## making a new page:
  1. Copy the "new page" template provided in `index.handlebars`
  1. Paste the content into a new file named `pagename.handlebars`
  1. Save the file and update your controllers accordingly!
  