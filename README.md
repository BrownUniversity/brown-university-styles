# Brown University Styles

Colors, typography and other styles for building React-based applications at Brown University.

---

## Usage

### 1. Install package

```sh
// npm
npm i git+https://bitbucket.brown.edu/scm/react/brown-university-styles.git#semver:^0.3

// yarn
yarn add git+https://bitbucket.brown.edu/scm/react/brown-university-styles.git#^0.3
```

_Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

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

See [http://docs.webservices.brown.edu/styles](http://docs.webservices.brown.edu/styles).

_Ensure you're on the network and that `10.55.29.58 docs.webservices.brown.edu` has been added to your hosts file._

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
