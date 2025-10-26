



// HACK: this is the class compontgne

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render(
  return {
    < div >
  <p>`count:  ${this.state.count}`</p>
    </div >

  }
  )
}
