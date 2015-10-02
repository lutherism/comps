var React = require('react');

var Tray = React.createClass({
  render: function() {
    return (
      <div className={"tray " + (this.props.pads ? "pads": null)} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Tray;
