var React = require('react');

var Hero = React.createClass({
  render: function() {
    return (
      <div className="hero">{this.props.children}</div>
    );
  }
});

module.exports = Hero;
