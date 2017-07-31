//app.js 1.0.1
console.log("app.js 1.0.1")

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
firstName: 'App.js',
lastName: '1.0.1'
};
const element = (
<h1>
    Hello, {formatName(user)}!
</h1>
);

ReactDOM.render(
element,
document.getElementById('app')
);