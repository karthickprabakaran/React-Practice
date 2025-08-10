


function counter() {

  let count = 0;

  function increment() {
    count++;
  }

  return React.createElement(
    "div",
    null,
    React.createElement("p", null, `Count : ${count} `),
    React.createElement("button", { onClick: increment }, 'increment')
  )
}





const rootElement = document.getElementById("root");


const root = ReactDOM.createRoot(rootElement);

root.render(React.createElement(counter));








