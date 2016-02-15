
var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null, 
        "Hello, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!", 
        false?"":React.createElement(N, null), 
        "It is ", this.props.date.toTimeString()
      )
    );
  }
});
var N = React.createClass({displayName: "N",
  render: function() {
    return (
      React.createElement("p", null, 
        "nnn"
      )
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    React.createElement(HelloWorld, {date: new Date()}),
    document.getElementById('content')
  );
}, 500);
