# Brown University Styles

Typography, colors and other styles for building React-based applications at Brown University.

_On-prem Bitbucket doesn't render markdown very nicely; view this in a markdown editor like [Dillinger](https://dillinger.io/)._

## Usage

1. Install packages:

   ```
     // npm
     npm i -D eslint git+https://bitbucket.brown.edu/scm/react/brown-university-styles.git#semver:^0.1
     // yarn
     yarn add -D eslint git+https://bitbucket.brown.edu/scm/eact/brown-university-styles.git#^0.1
   ```

   _Ensure you're on the network and that your SSH key has been added to the ssh-agent (`ssh-add ~/.ssh/id_rsa`) and uploaded to [bitbucket.brown.edu](https://bitbucket.brown.edu/plugins/servlet/ssh/account/keys)._

2. Import styles (via CSS or JavaScript):

   CSS (in your base stylesheet):

   ```
     @import "~brown-university-styles/dist/styles.css";
   ```

   JavaScript (where you're calling `ReactDOM.render`):

   ```
     import 'brown-university-styles/dist/styles.css';
   ```

   _This only needs to be done once. Remember to configure Webpack to load `.css` and `.woff` files._
