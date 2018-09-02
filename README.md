Starting with about 3.0.71, esm preserves symbolic links when loading modules
from within a package but uses the real directory when the package name itself
is a symbolic link. As the code in this repo demonstrates, that may result in
surprising behavior, especially for tests in monorepos. To see yourself:

```bash
yarn install https://github.com/apparebit/esm-seeing-double
yarn test
```
