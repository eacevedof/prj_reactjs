//app.js 1.0.0
console.log("app.js 1.0.0")
const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);