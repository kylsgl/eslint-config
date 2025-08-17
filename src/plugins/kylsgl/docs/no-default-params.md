# kylsgl/no-default-params

Disallows assigning default values to function parameters.

## ❌ Fail

```js
function fn(param = 1) {
	// do something
}
```

## ✔️ Pass

```js
function fn(param) {
	// do something
}
```
