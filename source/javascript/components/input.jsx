var React = require('react');

var Input = React.createClass({
  render: function() {
    return (
      <input className="input" {...this.props} />
    )
  }
});

module.exports = Input;
