# is this module

<img src="https://user-images.githubusercontent.com/1270648/88635580-7f85e100-d0c0-11ea-8c1b-a24f65ed2cec.jpg" align="right"
     alt="is this meme" width="300">

Tiny module type checker

* **useless** 🤪
* supports **es** and **commonjs** modules
* works in **node** and **browser**


## usage

```js
import { isEsm } from 'is-this-module'

console.log(isEsm) // true for node v14
```

```js
const { isCjs } = require('is-this-module')

console.log(isCjs) // true for node v12
```

## install

```
npm i is-this-module
```

## example

[sandbox](https://codesandbox.io/s/is-this-module-example-603ff)
