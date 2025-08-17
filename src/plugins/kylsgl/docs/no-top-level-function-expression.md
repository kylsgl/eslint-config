# kylsgl/no-top-level-function-expression

💼 This rule is enabled in the following configs: ✅ `base`.

Disallows defining function expressions at the top-level scope.

## ❌ Fail

```js
const fn = () => {
	// do something
};

const fn = function () {
	// do something
};

const fn = function fn() {
	// do something
};
```

## ✔️ Pass

```js
function fn() {
	// do something
}
```
