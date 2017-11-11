import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import List from './components/List.jsx';
import Bars from './components/Bars.jsx';
import Screens from './components/Screens.jsx';
import twitchData from './twitchData';
//7fat6yyl6puo9pjt6eypzfciu04pyj



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      streams: ['a'],
      streamerNames: ['a', 'b', 'c', 'd'],
      twitchData: twitchData
    }
    this.changeStreams = this.changeStreams.bind(this);
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  changeStreams(e) {
    console.log(e)
    var MOCKDATA = [];
    for(var i = 0; i < e; i++){MOCKDATA.push(e)}
    this.setState({streams: MOCKDATA})
  }

  render () {
    return (
    <div className = 'container-fluid'>
      <h1>APP</h1>
      <Bars changeStreams = {this.changeStreams} />
      <Screens streams = {this.state.streams} 
      streamerNames = {this.state.streamerNames} twitchData = {this.state.twitchData.data}/>
    </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



// <div class="dropdown show">
//   <button class="btn btn-secondary dropdown-toggle"
//           type="button" id="dropdownMenu2" data-toggle="dropdown"
//           aria-haspopup="true" aria-expanded="false">
//     Dropdown
//   </button>
//   <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
//     <a class="dropdown-item" href="#!">Action</a>
//     <a class="dropdown-item" href="#!">Another action</a>
//   </div>