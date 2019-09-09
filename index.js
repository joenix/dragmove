const noop = () => {};

function dragmove({
  vessel = document.body,
  thrown = document.body,
  handle = {}
}) {
  handle.move = handle.move || noop;
  handle.drag = handle.drag || noop;
  handle.drop = handle.drop || noop;

  this.draggable = true;

  let cache = {
    x: 0,
    y: 0
  };

  this.addEventListener(
    "dragstart",
    event => {
      cache.x = event.offsetX;
      cache.y = event.offsetY;

      handle.drag({
        event,
        target: this,
        x: event.clientX,
        y: event.clientY
      });
    },
    false
  );

  vessel.addEventListener(
    "dragover",
    event => {
      handle.move({
        event,
        target: vessel,
        x: event.clientX - cache.x,
        y: event.clientY - cache.y
      });
    },
    false
  );

  thrown.addEventListener("dragover", event => {
    event.preventDefault();
  });

  thrown.addEventListener(
    "drop",
    event => {
      handle.drop({
        event,
        target: thrown,
        x: event.clientX - cache.x,
        y: event.clientY - cache.y
      });
    },
    false
  );
}

if (window.HTMLElement) {
  HTMLElement.prototype.dragmove = dragmove;
}

export default dragmove;
