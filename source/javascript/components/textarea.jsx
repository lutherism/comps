var React = require('react');

var TextArea = React.createClass({
  render: function() {
    return (
      <textarea
        className="text-area"
        {...this.props} />
    )
  }
});

module.exports = TextArea;
