console.log('----------------------')
// JS by default does not support reactivity
let messagePrefix = 'Hello '
let message = messagePrefix + 'World'
console.log(message)
messagePrefix = 'Hi'
// 'Hello World' !== 'Hi World'
console.log(message)


// add reactivity
console.log('----with reactivity----')
const data = {
  message: 'Hello ',
  longMessage: 'World!',
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + 'World!';
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

console.log(proxy.longMessage);
proxy.message = 'Hello! ';
console.log(proxy.longMessage);
proxy.message = 'Hi ';
console.log(proxy.longMessage);

console.log('----------------------')