var React = require('react');

var SideBar = React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="sidebar">
          {this.props.sideEls}
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = SideBar;
