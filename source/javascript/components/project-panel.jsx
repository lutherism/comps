var React = require('react');

var ProjectPanel = React.createClass({
  render: function() {
    return (
      <div className="project-panel">
        <span className="profile" />
        <div className="footer">
          {this.props.project.name}
        </div>
      </div>
    )
  }
});

module.exports = ProjectPanel;
