var React = require('react');

var Radio = React.createClass({
  render: function() {
    return (
      <span className="radioButton">
        <input type="radio"
          checked={this.props.value}
          onChange={this.props.onChange} />
        <span className="overlay" />
        <label>{this.props.text}</label>
      </span>
    )
  }
});

module.exports = Radio;
