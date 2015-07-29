var React = require('react');

var Checkbox = React.createClass({
  render: function() {
    return (
      <span className="checkbox">
        <input type="checkbox"
          value={this.props.value}
          onChange={this.props.onChange} />
        <span className="overlay" />
        <label>{this.props.text}</label>
      </span>
    )
  }
});

module.exports = Checkbox;
