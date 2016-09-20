npm scripts for building development and production ready browserify bundles.

These scripts provide a good start for development and production builds using:

* `browserify -d` to enable debugging of separate files in development
* minifyify to create even smaller production code
* uglify-js inside minifyify which lets you to do additional uglify-js stuff, like mangling

### Demo

```
npm install
npm run [dev | prod]
npm start
```

the application should be up on [http://localhost:3000].