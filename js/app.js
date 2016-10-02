var React = require('react');
var ReactDOM = require('react-dom');

var mainColors = {
  backgroundColor: '#e67e22',
  color: white
}

var mainPage = React.createClass({
  setState: function() {

  },
  render: function() {
      return (
        <div style={ mainColors }>
          <h1>Welcome to my Website!</h1>
        </div>
      )
    }
  });

ReactDOM.render(
  <mainPage />,
  document.getElementById('app')
)
