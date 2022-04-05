# Webpack Typescript Starter Kit

This starter kit is a bare bones Webkit bundler pack that uses Typescript and demonstrates how you can use split code for your CSS and JS/TS files.

When you build for production notice how we are left with just single `bundle.js` and `main.css` files, the hash is also sent to the end of the files in the query string to help bypass caching like this:

```html
 <link href="main.css?467b11514e6b64ff5c3d" rel="stylesheet">
 <script src="bundle.js?467b11514e6b64ff5c3d"></script>
```

## Why Typescript?

If you've not yet started using Typescript... then give it a try, honestly you'll not look back. It helps you trap problems before they become bigger problems further down the line!

## Running locally and building:

`npm run dev` - Runs local site

`npm run build` - Builds production version and bundles all files together


## Adding other files:

In `webpack.config.js` if you uncomment these lines:

```js
    new CopyPlugin({
      patterns: [
        {from: "dev/assets/img", to: "assets/img"},
        {from: "dev/robots.txt", to: "robots.txt"},
      ],
    }),
```

...then you can get it to also copy other files into your build directory if you so desire!

Enjoy!