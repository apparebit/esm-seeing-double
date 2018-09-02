# The Bug

Starting with about 3.0.71, esm preserves symbolic links when loading modules
from within a package but uses the real directory when the package name itself
is a symbolic link. As the code in this repo demonstrates, that may result in
surprising behavior, especially for tests in monorepos. To see yourself:

```bash
git clone https://github.com/apparebit/esm-seeing-double
cd esm-seeing-double
yarn install
yarn test
```

# The Fix

<span style="background-color:#FFDCE0;">Alas, as the
[issue](https://github.com/standard-things/esm/issues/588) nicely demonstrates,
[@jdalton](https://github.com/jdalton) fixed the bug in no time. The fix ships
in __esm@3.0.82__.</span>
