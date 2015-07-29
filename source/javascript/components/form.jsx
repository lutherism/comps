var React = require('react');

var Form = React.createClass({
  render: function() {
    return <div className="form-modal">
      <h2>
        {this.props.title}
      </h2>
      <form>
        {this.props.children}
      </form>
    </div>
  }
});

module.exports = Form;
