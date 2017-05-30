import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// TODO: default
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// TODO: step 1
// class component can have a state
// simple react component using jsx
// class App extends Component {
//   render() {
//     return <h1>Chitrank Dixit</h1>
//   }
// }

// TODO: step 2
// creating component using react
// class App extends Component {
//   render() {
//     return React.createElement('h1', null, 'Hello Chitrank')
//   }
// }

// TODO: step 3
// stateless function component: It does not capture the state of the component
//const App = () => <h1>Hello Everyone</h1>

// TODO: step 4
// adding multiple elements to our react component
// wrapping jsx in parenthesis is optional so that newlines can never be missed
// class App extends Component {
//   render() {
//     return (
//       <div>
//       <h1>Chitrank Dixit</h1> <b>Bold</b>
//       </div>
//     )
//   }
// }

// TODO: step 5
// class App extends Component {
//   render() {
//     return <div>
//       <h1>Chitrank Dixit</h1> <b>Bold</b>
//       </div>
//   }
// }




// set properties on react components
// TODO: step 6
// class App extends Component {
//   render() {
//     return <h1>{this.props.txt}</h1>
//   }
// }

// TODO: step 7
// class App extends Component {
//   render() {
//     let txt = this.props.txt;
//     let cat = this.props.cat;
//     let msg = this.props.msg;
//     return <div><h1>{txt}</h1> <h1>{cat}</h1> <h1>{msg}</h1></div>
//   }
// }
//
//
// // proptypes validates and ask for the value that needs to be supplied otherwise it will throw an error
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired,
//   msg: React.PropTypes.string
// }
//
// // we can also set default properties
// App.defaultProps = {
//   txt: "Chitrank",
//   cat: 1,
//   msg: "made with effort"
// }

// TODO: step 8
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'this is the state txt'
//     }
//   }
//   update ( e ){
//     this.setState({txt: e.target.value});
//   }
//   render() {
//
//     return <div><h1>{this.state.txt;}</h1></div>
//   }
// }
//
//
// // proptypes validates and ask for the value that needs to be supplied otherwise it will throw an error
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired,
//   msg: React.PropTypes.string
// }
//
// // we can also set default properties
// App.defaultProps = {
//   txt: "Chitrank",
//   cat: 1,
//   msg: "made with effort"
// }


// TODO: step 9 two way binding in the react js
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'this is the state txt'
//     }
//   }
//   update ( e ){
//     this.setState({txt: e.target.value});
//   }
//   render() {
//
//     return (
//       <div>
//       <input type="text" onChange={this.update.bind(this)}/>
//       <h1>{this.state.txt}</h1></div>
//     )
//   }
// }
//
//
// // proptypes validates and ask for the value that needs to be supplied otherwise it will throw an error
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired,
//   msg: React.PropTypes.string
// }
//
// // we can also set default properties
// App.defaultProps = {
//   txt: "Chitrank",
//   cat: 1,
//   msg: "made with effort"
// }

// manage react component state with setState

// stateless property user react component as a childred for the other components
// TODO: step 10

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'this is the state txt'
//     }
//   }
//   update ( e ){
//     this.setState({txt: e.target.value});
//   }
//   render() {
//
//     return (
//       <div>
//         <h1>{this.state.txt}</h1>
//         // The child element is updating the parent element
//         <Widget update={this.update.bind(this)}/>
//       </div>
//     )
//   }
// }
//
//
// // proptypes validates and ask for the value that needs to be supplied otherwise it will throw an error
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired,
//   msg: React.PropTypes.string
// }
//
// // we can also set default properties
// App.defaultProps = {
//   txt: "Chitrank",
//   cat: 1,
//   msg: "made with effort"
// }
//
// // manage react component state with setState
// // specifying the child element
// const Widget = (props) => <input type="text" onChange={props.update.bind(this)}/>

// TODO: step 11
// class App extends Component {
//   render() {
//     return <Button>React</Button>
//   }
// }
//
// const Button = (props) => <button>{props.children}</button>

// TODO: Step 12

// class App extends Component {
//   render() {
//     return <Button>I <Heart /> React</Button>
//   }
// }
//
// const Button = (props) => <button>{props.children}</button>
//
// class Heart extends Component {
//   render() {
//     return <span>&hearts;</span>
//   }
// }
//

// TODO: Step 13
// class App extends Component {
//   render() {
//     // we just need to supply text below to pass the validation
//     return <Title />
//   }
// }
//
// const Title = (props) => <h1>Title: {props.text}</h1>
//
// // the below code validates the text and if not found would throw an error on the console
// // but we can also return a custom function
// // Title.propTypes = {
// //   text: React.PropTypes.string.isRequired
// // }
//
// Title.propTypes = {
//   text(props, propName, component) {
//     if(!(propName in props)){
//       return new Error(`missing ${propName}`);
//     }
//   }
// }

// TODO: Step 14

// class App extends Component {
//   render() {
//     // we just need to supply text below to pass the validation
//     return <Title text="Thesfd"/>
//   }
// }
//
// const Title = (props) => <h1>Title: {props.text}</h1>
//
// // the below code validates the text and if not found would throw an error on the console
// // but we can also return a custom function
// // Title.propTypes = {
// //   text: React.PropTypes.string.isRequired
// // }
//
// Title.propTypes = {
//   text(props, propName, component) {
//     if(!(propName in props)){
//       return new Error(`missing ${propName}`);
//     }
//
//     // validation for the length of the text
//
//     if(props.text.length < 5){
//       return new Error(`Length does not match for ${propName}`);
//     }
//
//     if(props[propName].length < 8){
//       return new Error(`Length does not match for ${propName} 1`);
//     }
//   }
// }

// TODO: Step 15 react synthetic event system
// class App extends Component {
//   // set initial state in our constructor
//   constructor() {
//     super();
//     this.state = {currentEvent: "----"}
//     this.update = this.update.bind(this)
//   }
//
//   update(e) {
//     // this would print the event that is triggered
//     this.setState({currentEvent: e.type})
//   }
//
//   // Touch start, Touch Move and Touch End are the mobile device events
//   render() {
//     return (
//       <div>
//         <textarea
//           onKeyPress={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           onDoubleClick={this.update}
//           onTouchStart={this.update}
//           onTouchMove={this.update}
//           onTouchEnd={this.update}
//           cols="30"
//           rows="10" />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }

// TODO: Step 16 Use react to get a reference to specific events

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {a: ''}
//   }
//   update() {
//     this.setState({
//       a: this.refs.a.value,
//       b: this.refs.b.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <input
//           ref="a"
//           type="text"
//           onChange={this.update.bind(this)}
//         />{this.state.a}
//         <hr />
//
//         <input
//           ref="b"
//           type="text"
//           onChange={this.update.bind(this)}
//         />{this.state.b}
//       </div>
//     )
//   }
// }

// TODO: step 17

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {a: ''}
//   }
//   update() {
//     this.setState({
//       a: ReactDOM.findDOMNode(this.a).value,
//       b: this.refs.b.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <input
//           ref={component => this.a = component}
//           type="text"
//           onChange={this.update.bind(this)}
//         />{this.state.a}
//         <hr />
//
//         <input
//           ref="b"
//           type="text"
//           onChange={this.update.bind(this)}
//         />{this.state.b}
//       </div>
//     )
//   }
// }
//
// class Input extends Component {
//   render() {
//     return <input type="text" onChange={this.props.update} />
//   }
// }

// TODO: Step 18
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {a: ''}
//   }
//   update() {
//     this.setState({
//       a: this.a.refs.input.value,
//       b: this.refs.b.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Input
//           ref={component => this.a = component}
//           type="text"
//           update={this.update.bind(this)}
//         />{this.state.a}
//         <hr />
//
//         <input
//           ref="b"
//           type="text"
//           onChange={this.update.bind(this)}
//         />{this.state.b}
//       </div>
//     )
//   }
// }
//
// class Input extends Component {
//   render() {
//     return <div><input ref="input" type="text" onChange={this.props.update} /> </div>
//   }
// }
// export default App;


// TODO: Step 19
// when our component is added to the DOM it is called mounting
// when our component is removed from the DOM it is called unmounting

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//   // called when the component will be mounted
//   componentWillMount() {
//     console.log('componentWillMount')
//   }
//
//   // this will fire once the component is already being mounted to the DOM
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//
//   // this will get fired when our component leave our DOM
//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//   }
//   render() {
//     console.log('render');
//     return <button onClick={this.update}>{this.state.val}</button>
//   }
// }
//
// class Wrapper extends Component {
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }

// #TODO: Step 20

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//   // called when the component will be mounted
//   componentWillMount() {
//     console.log('componentWillMount')
//     this.setState({m: 2})
//   }
//
//   // this will fire once the component is already being mounted to the DOM
//   // while did mount the component the below method would print which component got mounted
//   // when this will get mounted the render method is being called every half of the second
//   componentDidMount() {
//     console.log('componentDidMount');
//     console.log(ReactDOM.findDOMNode(this));
//     this.inc = setInterval(this.update, 500)
//
//   }
//
//   // this will get fired when our component leave our DOM
//
//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//     clearInterval(this.inc)
//
//   }
//   render() {
//     console.log('render');
//     return <button onClick={this.update}>{this.state.val * this.state.m}</button>
//   }
// }
//
// class Wrapper extends Component {
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }



// to accompolish this we need to export wrapper rather than App as default Component
// export default Wrapper;

// TODO: step 21
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {increasing: false}
//   }
//   update() {
//     ReactDOM.render(<App val={this.props.val + 1}/>, document.getElementById('root'))
//   }
//   // new properties are coming in
//   componentWillReceiveProps(nextProps) {
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   render() {
//     console.log(this.state.increasing);
//     return (
//       <button onClick={this.update.bind(this)}>{this.props.val}</button>
//     )
//   }
//
//   // this will take on previous props as well as the previous stateless
//   componentDidUpdate(prevProps, prevState) {
//     console.log(`prevProps: ${prevProps.val}`);
//   }
// }
//
// App.defaultProps = {val: 0}

// iterating over the jsx in order to
// TODO: Step 22:
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {items: []}
//   }
//   componentWillMount() {
//     fetch( 'https://swapi.co/api/people/?format=json' )
//       .then( response => response.json() )
//       .then( ({results: items}) => this.setState({items}) )
//   }
//
//   render(){
//     let items = this.state.items;
//     return (
//       <div>
//         {items.map(item => <h4 key={this.name}>{item.name}</h4>)}
//       </div>
//     )
//   }
// }

// TODO: step 23
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {items: []}
//   }
//   componentWillMount(){
//     fetch( 'https://swapi.co/api/people/?format=json' )
//       .then( response => response.json() )
//       .then( ({results: items}) => this.setState({items}))
//   }
//   filter(e){
//     this.setState({filter: e.target.value})
//   }
//   render(){
//     let items = this.state.items;
//     if(this.state.filter){
//       items = items.filter( item =>
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase()))
//     }
//     return (
//       <div>
//         <input type="text"
//         onChange={this.filter.bind(this)}/>
//         {items.map(item =>
//           <Person key={item.name} person={item} />)}
//       </div>
//     )
//   }
// }
//
// const Person = (props) => <h4>{props.person.name}</h4>
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


// TODO: Step 24
// higher order components
// purpose of higher order compoments is to share common functionality and information between components

// const HOC = (InnerComponent) => class extends React.Component {
//   constructor(){
//     super();
//     this.state = {count: 0}
//   }
//   update(){
//     this.setState({count: this.state.count + 1})
//   }
//   componentWillMount(){
//     console.log('will mount')
//   }
//   render(){
//     return (
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//       />
//     )
//   }
// }
//
// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }
//
// const Button = HOC((props) =>
//   <button onClick={props.update}>{props.children} - {props.count}</button>
// )
//
// class Label extends React.Component {
//   componentWillMount(){
//     console.log('label will mount')
//   }
//   render(){
//     return (
//       <label onMouseMove={this.props.update}>
//       {this.props.children} - {this.props.count}
//       </label>
//     )
//   }
// }
//
// const LabelHOC = HOC(Label)
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// TODO: Step 25
// Build a JSX live compiler (this would convert HTML into React JSX)
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       input: '/* add your jsx here */',
//       output: '',
//       err: ''
//     }
//   }
//   update(e){
//     let code = e.target.value;
//     try {
//       this.setState({
//         output: window.Babel
//         .transform(code, { presets: ['es2015', 'react']})
//         .code,
//         err: ''
//       })
//     }
//     catch(err){
//       this.setState({err: err.message})
//     }
//   }
//   render(){
//     return (
//       <div>
//         <header>{this.state.err}</header>
//         <div className="container">
//           <textarea
//           onChange={this.update.bind(this)}
//           defaultValue={this.state.input}/>
//           <pre>
//             {this.state.output}
//           </pre>
//         </div>
//       </div>
//     )
//   }
// }
//
//
// ReactDOM.render(<App />, document.getElementById('root'));

// TODO: Step 26
// understanding React.Children Utilities

// class App extends React.Component {
//   render(){
//     return (
//       <Parent>
//         <div className="childA"></div>
//       </Parent>
//     )
//   }
// }
//
// class Parent extends React.Component {
//   render(){
//     //console.log(this.props.children)
//     // let items = React.Children
//     //    .forEach(this.props.children,
//     //    child => console.log(child.props.className))
//     // let items = React.Children
//     // .map(this.props.children, child =>  child)
//     //let items = React.Children.toArray(this.props.children)
//
//     // only expects for only 1 child of the element
//     let items = React.Children.only(this.props.children)
//     console.log(items)
//     return null
//   }
// }

// TODO: Step 26
// Use React.cloneElement to Extend Functionality of Children Components
// class App extends React.Component {
//   render(){
//     return (
//       <Buttons>
//         <button value="A">A</button>
//         <button value="B">B</button>
//         <button value="C">C</button>
//       </Buttons>
//     )
//   }
// }
//
//
// class Buttons extends React.Component {
//   constructor(){
//     super();
//     this.state = {selected: 'None'}
//   }
//   selectItem(selected){
//     this.setState({selected})
//   }
//   render(){
//       // to modify the props of the children we need to create new elements out of it
//       // beacause we have the child descriptors but not the actual child
//       let fn = child =>
//         React.cloneElement(child, {
//           onClick:this.selectItem.bind(this, child.props.value)
//         })
//       let items = React.Children.map(this.props.children, fn);
//       return (
//         <div>
//           <h2>You have selected: {this.state.selected}</h2>
//           {items}
//         </div>
//       )
//   }
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// TODO: Step 27
// Write More Reusable React Components with Composable APIs

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    })
  }
  render(){
    return (
      <div>
        <NumInput
          ref="red"
          min={0}
          max={255}
          step={0.01}
          val={+this.state.red}
          label="Red"
          update={this.update} />
      </div>
    );
  }
}

class NumInput extends React.Component {
  render(){
    let label = this.props.label !== '' ?
      <label>{this.props.label} -  {this.props.val}</label> : ''
    return (
        <div>
        <input ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
          {label}
        </div>
    );
  }
}

NumInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  val: PropTypes.number,
  label: PropTypes.string,
  update: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;
