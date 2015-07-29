var React = require('react');

var Button = React.createClass({
  propTypes: {
    role: React.PropTypes.oneOf(["primary", "secondary", "tetriary",
      "additive", "destructive"]),
    size: React.PropTypes.oneOf(["large", "small", "full-large", "full-small"])
  },
  getInitialState: function() {
    return {
      pressed: ""
    };
  },
  render: function() {
    return (
      <button
        className={["button", this.props.role, this.props.size, this.state.pressed].join(" ")}
        onClick={this.props.onClick}
        onMouseDown={this.setState.bind(this, {pressed: "pressed"}, null)}
        onMouseUp={this.setState.bind(this, {pressed: ""}, null)}
        onMouseOut={this.setState.bind(this, {pressed: ""}, null)}>
        {this.props.children}
      </button>
    );
  }
});

module.exports = Button;
