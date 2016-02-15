
var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        Hello, <input type="text" placeholder="Your name here" />!
        {false?"":<N/>}
        It is {this.props.date.toTimeString()}
      </div>
    );
  }
});
var N = React.createClass({
  render: function() {
    return (
      <p>
        nnn
      </p>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <HelloWorld date={new Date()} />,
    document.getElementById('content')
  );
}, 500);
