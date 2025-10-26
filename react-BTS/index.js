

function Counter() {

  const [count, setCount] = React.useState(0);

  function increment() {
    setCount((prev) => {
      return prev += 1;
    })
  }

  function decrement() {
    setCount((prev) => {
      return prev -= 1;
    })
  }

  return React.createElement('div', null,
    React.createElement('p', null, `Count  ${count}`),
    React.createElement('button', { onClick: increment }, 'Increment'),
    React.createElement('button', { onClick: decrement }, 'Decrement'),

  )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);


root.render(React.createElement(Counter));
