var React = require('react');
var ReactDOM = require('react-dom');

var Dropdown = React.createClass({
  getInitialState: function() {
    return {
      open: false
    }
  },
  componentDidMount: function() {
    document.addEventListener('click', this.closeIfOutside);
  },
  componentWillUnmount: function() {
    document.removeEventListener('click', this.closeIfOutside);
  },
  render: function() {
    return (
      <div className="dropdown">
        <button
          onClick={this.handleOpen}>
          {this.props.text}
          {this.state.open ?
            <i className="fa fa-chevron-up" /> :
            <i className="fa fa-chevron-down" />}
        </button>
        {this.state.open ? this.renderMenu() : null}
      </div>
    );
  },
  renderMenu: function() {
    return (
      <div className="menu">
        <ul>
          {this.props.items.map(function(item) {
            return <li onClick={item.onClick}>{item.text}</li>
          })}
        </ul>
      </div>
    );
  },
  closeIfOutside: function(e) {
    if (!this.state.open) return;
    var thisNode = ReactDOM.findDOMNode(this);
    if (e.target && !(e.target === thisNode || thisNode.contains(e.target))) {
      this.setState({open: false});
    }
  },
  handleOpen: function(e) {
    this.props.clickHandler && this.props.clickHandler(e);
    this.setState({open: !this.state.open});
  }
});

module.exports = Dropdown;
