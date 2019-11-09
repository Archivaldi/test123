//import React from 'react';

// class App extends React.Component {

//   render() {
//     state = {
//       items: []
//     }

//     componentDidMount () {
//       fetch ("/api/all", {
//         method: "GET"
//       })
//       .then (r => r.json())
//       .then (r => console.log(r))
//     }

//     return (
//       <div>
//         klajdrgaoegoarjt
//       </div>
//     )
//   }
// }

// export default App;


import React from 'react'

class App extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    fetch('/api/all', {
      method: 'GET'
    })
    .then( r => r.json() )
    .then( r => console.log(r) )
  }
  
  render() {
    return (
      <div>
        fadsfdsafsd
      </div>
    )
  }
}

export default App