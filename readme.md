# is this module

<img src="https://ucarecdn.com/7b795eb1-8108-484b-b285-763a563e218f/-/resize/300x/-/quality/smart/"
     srcset="https://ucarecdn.com/7b795eb1-8108-484b-b285-763a563e218f/-/resize/600x/-/quality/lighter/-/format/auto/ 2x"
     alt="pigeon with coffee" width="300" align="right">

Tiny module type checker

* **useless** 🤪
* supports **es** and **commonjs** modules
* works in **node** and **browser**


## usage

```js
// node v14
import { isEsm, isCjs } from 'is-this-module'

console.log(isEsm) // true
console.log(isCjs) // false
```

```js
// node v12
const { isEsm, isCjs } = require('is-this-module')

console.log(isEsm) // false
console.log(isCjs) // true
```

## install

```
npm i is-this-module
```

## example

[sandbox](https://codesandbox.io/s/is-this-module-example-603ff)
