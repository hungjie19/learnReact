const {
  CountActions,
  CountStore
} = window.App;

class CountApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clickCount: 0
    };
    this.addClick = this.addClick.bind(this);
    this.subClick = this.subClick.bind(this);
    this.multiply2 = this.multiply2.bind(this);
    
  }

  componentDidMount() {
    this._removeChangeListener = CountStore.addChangeListener(
      () => this.setState({ clickCount: CountStore.getAll() })
    );
  }

  componentWillUnmount() {
    this._removeChangeListener();
  }

  render() {
    const styles = {
      app: {marginLeft: '10%'},
      count: {color:'#F00', fontSize: '50px'}
    };
    return (
      <div style={styles.app}>
        <h1>FLUX 計數器 Demo</h1>
        <hr />
        <div>{ this.props.name }</div>
        <span style={styles.count}>{ this.state.clickCount }</span>
        <br />
        <button onClick = { this.addClick }>+</button>
        <button onClick = { this.subClick }>-</button>
        <button onClick = { this.multiply2 }>x2</button>
      </div>
    );
  }

  addClick() {
    this.setState({clickCount: this.state.clickCount + 1});
    // CountActions.addClick();
  }

  subClick() {
    this.setState({clickCount: this.state.clickCount - 1});
    // CountActions.subClick();
  }
  
  multiply2() {
    CountActions.multiply();
  }

  /*
    <button onClick = { this.zero }>0</button>
   */
  // zero() {
  //   CountActions.zero();
  // }

}

window.App.CountApp = CountApp;
