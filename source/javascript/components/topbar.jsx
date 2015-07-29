var React = require('react');

var TopBar = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        {this.renderIcon()}
        {this.props.leftSide}
        <div style={{float: "right"}}>
          {this.props.rightSide}
        </div>
      </div>
    );
  },
  renderIcon: function() {
    return <span className="icon" />
  }
});

module.exports = TopBar;
