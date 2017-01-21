import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
  render: () => {
    return (
      <div>
        hello world!
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
