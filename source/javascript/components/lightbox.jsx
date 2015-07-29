var React = require('react');

var Lightbox = React.createClass({
  propTypes:  {
    initialContentWidth:  React.PropTypes.number,
    initialContentHeight: React.PropTypes.number,
    fixedLeft:            React.PropTypes.number,
    fixedTop:             React.PropTypes.number,
    showCloseButton:      React.PropTypes.bool,
    closeHandler:         React.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      initialContentWidth: 100,
      initialContentHeight: 100
    };
  },

  getInitialState: function getInitialState() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      contentWidth: this.props.initialContentWidth,
      contentHeight: this.props.initialContentHeight,
      unrendered: true
    };
  },

  render: function render() {
    var computedPopUpStyle = {
      visibility: this.state.unrendered ? "hidden" : "visible",
      left: this.props.fixedLeft || ((this.state.windowWidth / 2) - (this.state.contentWidth / 2)),
      top: this.props.fixedTop || ((this.state.windowHeight / 2) - (this.state.contentHeight / 2))
    };

    return (
      <div className="lightbox-shadow">
        <div ref="content"
          style={computedPopUpStyle}
          className="lightbox-content">
          {this.renderChildrenComponents()}
          {this.renderCloseButton()}
        </div>
      </div>
    );
  },

  renderChildrenComponents: function renderChildrenComponents() {
    if (!this.props.children && !this.state.unrendered) return;

    return this.props.children;
  },

  renderCloseButton: function renderCloseButton() {
    if (this.props.showCloseButton)
      return (
        <i className={this.props.closeButtonClassName} onClick={this.closeHandler} />
      );
  },

  closeHandler: function closeHandler(e) {
    e && e.preventDefault();
    e && e.stopPropagation();

    if (this.props.closeHandler) this.props.closeHandler(e);
    this.unmountLightbox();
  },

  unmountLightbox: function unmountLightbox() {
    var node = this.getDOMNode();
    React.unmountComponentAtNode(node.parentElement);
    node.remove();
  },

  componentWillMount: function componentWillMount() {
    var called;
    this.handleResize = function() {
      if (called) return;

      this._handleResize.apply(this, arguments);
      called = true;
      setTimeout(function() {
        called = false;
      }, 10);
    }.bind(this);
  },

  componentDidMount: function componentDidMount() {
    var computedState = this.getContentSize();
    computedState.unrendered = false;
    this.setState(computedState);
    window.addEventListener("resize", this.handleResize);
  },

  componentDidUpdate: function componentDidUpdate() {
    var calcSize = this.getContentSize();

    if (calcSize.contentWidth !== this.state.contentWidth ||
      calcSize.contentHeight !== this.state.contentHeight) {
      this.setState(calcSize);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unbindEvents();
  },

  unbindEvents: function unbindEvents() {
    window.removeEventListener("resize", this.handleResize);
  },

  getContentSize: function getContentSize() {
    var contentDOM = this.refs.content.getDOMNode().firstChild;

    return {
      contentWidth: contentDOM.clientWidth,
      contentHeight: contentDOM.clientHeight
    };
  },

  _handleResize: function _handleResize(e) {
    if (e && e.type === "scroll" && !this.state.visible) return;
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
  }
});

module.exports = Lightbox;
