# Brown University Styles

Colors, typography and other style utilities for building React-based applications at Brown University.

---

## Usage

### 1. Install package

```sh
// npm
npm i BrownUniversity/brown-university-styles#semver:^0.14.0

// yarn
yarn add BrownUniversity/brown-university-styles#^0.14.0
```

### 2. Import styles

CSS (in your base stylesheet):

```css
@import "~brown-university-styles/dist/styles.css";
```

JavaScript (where you're calling `ReactDOM.render`):

```javascript
import "brown-university-styles/dist/styles.css";
```

_This only needs to be done once (via CSS or JavaScript). Remember to configure Webpack to load `.css` and `.woff` files._

---

## Documentation

The documentation is available https://brownuniversity.github.io/brown-university-styles/.

---

## Development

Install dependencies:

```sh
npm install
```

Run examples at [http://localhost:8080](http://localhost:8080/) with [storybook](https://storybook.js.org/):

```sh
npm start
```

---

## Deployment

To publish a new version, do the following:

1. Bump version in `package.json` and `package-lock.json`
2. Bump version in `README.md` install instructions (for major and minor version bumps only)
3. Update `CHANGELOG.md`
4. `npm run build`
5. Commit changes
6. Tag new version
7. Push master and tags to all remotes
