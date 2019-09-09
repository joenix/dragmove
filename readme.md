# dragmove

> joenix

```bash
npm i dragmove --save
# or
yarn add dragmove
```

```html
<div id="container">
  <div id="put"></div>
</div>

<div id="target"></div>
```

```js
let container = document.querySelector("#container");
let put = document.querySelector("#put");
let target = document.querySelector("#target");

target.dragmove({
  vessel: container,
  thrown: put,
  handle: {
    move({ event, target, x, y }) {
      console.log("in move : ", event, target, x, y);
    },
    drag({ event, target, x, y }) {
      console.log("in drag : ", event, target, x, y);
    },
    drop({ event, target, x, y }) {
      console.log("in drop : ", event, target, x, y);
    }
  }
});
```
