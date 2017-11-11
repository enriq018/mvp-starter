import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import List from './components/List.jsx';
import Bars from './components/Bars.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      streams: [],
      streamerNames: []
    }
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

  render () {
    return (
    <div className = 'container-fluid'>
      <h1>APP</h1>
      <Bars/>
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