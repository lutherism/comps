var React = require('react');

var Modal = React.createClass({
  render: function() {
    return (
      <div className="modal">
        <div className="modalContent">
          {this.props.children}
        </div>
        <div className="footer">
          {this.props.footerEls}
        </div>
      </div>
    );
  }
});

module.exports = Modal;
