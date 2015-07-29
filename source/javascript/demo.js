var React = require('react');
var Components = require('Components');
var domready = require('domready');

var Projects = [{
  name: "Camera Controller",
  size: "2 MB",
  comments: 3,
  ups: 5
}, {
  name: "RC Car",
  size: "6 MB",
  comments: 3,
  ups: 5
}, {
  name: "Cat Feeder",
  size: "2 MB",
  comments: 3,
  ups: 5
}, {
  name: "Light Switch",
  size: "1 MB",
  comments: 3,
  ups: 5
}, {
  name: "Screw Driver",
  size: "5 MB",
  comments: 3,
  ups: 5
}, {
  name: "Running Alarm Clock",
  size: "17 MB",
  comments: 3,
  ups: 5
}, {
  name: "Card Shuffler",
  size: "890 KB",
  comments: 3,
  ups: 5
}, {
  name: "Aquarium Pump",
  size: "24 MB",
  comments: 3,
  ups: 5
}, {
  name: "Drink Mixer",
  size: "3 MB",
  comments: 3,
  ups: 7
}];

var Files = [
  {
    name: "claw.dwg",
    size: "800 KB",
    mime: "3D Drawing"
  }, {
    name: "main.c",
    size: "2 MB",
    mime: "Code"
  }, {
    name: "arm.dwg",
    size: "600KB",
    mime: "3D Drawing"
  }, {
    name: "profile.jpg",
    size: "800KB",
    mime: "Image"
  }
];

var MyApp = React.createClass({
  getInitialState: function() {
    return {
      newUserOpen: false,
      newProjOpen: false,
      projects: Projects,
      files: Files,
      private: false
    }
  },
  render: function() {
    return (
      <div>
        <Components.TopBar
          rightSide={
            [<Components.Button
              size="large"
              role="secondary">
              Log In
            </Components.Button>,
            <Components.Button
              size="large"
              role="tetriary"
              onClick={this.setState.bind(this, {newUserOpen: true}, null)}>
              Sign Up
            </Components.Button>]
          }/>
        <Components.SideBar>
          <Components.Hero />
          <div style={{width: "25%", height:"600", display: "inline-block"}}>
            <Components.Tray pads={true}>
              <h3>Hot Links</h3>
              <ul className="trendingItems">
                <li><a>How to Tune Printer</a></li>
                <li><a>Where to Buy Robot Kits</a></li>
                <li><a>Cat Feeder</a></li>
                <li><a>Cool 3D Jewlery</a></li>
                <li><a>Screwdriver</a></li>
              </ul>
            </Components.Tray>
            <Components.Tray>
              {this.state.projects.slice(0, 2).map(function(proj) {
                return <Components.ProjectPanel project={proj} />;
              })}
            </Components.Tray>
          </div>
          {this.renderTable()}
        </Components.SideBar>
        {this.state.newUserOpen ?
          this.renderNewUserForm() : null}
        {this.state.newProjOpen ?
          this.renderNewProjectModal() : null}
      </div>
    );
  },
  renderNewUserForm: function() {
    return (
      <Components.LightBox
        closeHandler={this.setState.bind(this, {newUserOpen: false}, null)}>
        <Components.Form
          title="Signup">
          <Components.Input
            placeholder="Name" />
          <Components.Input
            placeholder="Email" />
          <Components.Input
            placeholder="Password" />
          <Components.Button
            size="full-large"
            role="additive"
            onClick={this.setState.bind(this, {newUserOpen: false}, null)}>
            Sign Up
          </Components.Button>
        </Components.Form>
      </Components.LightBox>
    )
  },
  onPrivacySwitch: function(state, e) {
    this.setState({private: state});
  },
  renderNewProjectModal: function() {
    return (<Components.LightBox
      closeHandler={this.setState.bind(this, {newProjOpen: false}, null)}>
      <Components.Modal
        footerEls={
          <div style={{float:"right"}}>
            <Components.Radio
              text="Private"
              onChange={this.onPrivacySwitch.bind(null, true)}
              value={this.state.private} />
            <Components.Radio
              text="Public"
              onChange={this.onPrivacySwitch.bind(null, false)}
              value={!this.state.private} />
            <Components.Button
              size="small"
              role="secondary"
              onClick={this.setState.bind(this, {newProjOpen: false}, null)}>
              Cancel
            </Components.Button>
            <Components.Button
              size="small"
              role="primary">
              Save
            </Components.Button>
          </div>
        }>
        <Components.Tray pads={true}>
          <div style={{width: 250, height: 250, backgroundColor: "grey", display: "inline-block"}} />
          <div style={{display: "inline-block", position:"absolute"}}>
            <Components.Tray pads={true}>
              <Components.Tray>
                <Components.Input placeholder="Name" />
              </Components.Tray>
              <Components.Input placeholder="Description" />

            </Components.Tray>
          </div>
        </Components.Tray>
        <Components.Tray pads={true}>
          <Components.Tray>
            <div style={{float: "right"}}>
              <Components.Button
                size="large"
                role="Additive"
                onClick={this.popKloudless}>
                Add Files
              </Components.Button>
            </div>
          </Components.Tray>
          {this.renderFilesTable()}
        </Components.Tray>
      </Components.Modal>
    </Components.LightBox>);
  },
  renderFilesTable: function() {
    return (
      <table className="materialTable">
        <colgroup>
          <col style={{width: "100%"}} />
          <col style={{width: 1}} />
          <col style={{width: 1}} />
          <col style={{width: 1}} />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th className="edge data">Type</th>
            <th className="right data">Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.files.map(function (file) {
            return (
              <tr>
                <td>{file.name}</td>
                <td className="edge data">{file.mime}</td>
                <td className="right data">{file.size}</td>
                <th>
                  <Components.Button size="small" role="secondary">
                   ...</Components.Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  },
  renderTable: function() {
    return (
      <div style={{display: "inline-block", width: "75%", position: "absolute"}}>
        <Components.Tray>
          <div style={{float: "left"}}>
            <Components.Dropdown
              text="Top Projects"
              items={[{
                text: "Newest Projects",
                onClick: function(){console.log(arguments)}
              }, {
                text: "Random Projects",
                onClick: function(){console.log(arguments)}
              }]} />
            </div>
          <div style={{float: "right"}}>
            <Components.Button
              size="large"
              role="Additive"
              onClick={this.setState.bind(this, {newProjOpen: true}, null)}>
              New Project
            </Components.Button>
          </div>
        </Components.Tray>
        <table className="materialTable">
          {this.renderColGroups()}
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      </div>
    );
  },
  renderColGroups: function() {
    return (
      <colgroup>
        <col style={{width: "100%"}}/>
        <col style={{width: 1}} />
        <col style={{width: 1}} />
        <col style={{width: 1}} />
      </colgroup>
    )
  },
  renderHeader: function() {
    return (
      <thead>
      <tr>
        <th>
         Project
        </th>
        <th className="edge data">
         Comments
        </th>
        <th className="right data">
         Size
        </th>
        <th className="right data">
         Points
        </th>
        </tr>
      </thead>
    );
  },
  renderBody: function() {
    return (
      <tbody>
        {this.state.projects.map(function(proj) {
          return (
            <tr>
              <ProjectCell project={proj} />
              <td className="edge data">{proj.comments}</td>
              <td className="right data">{proj.size}</td>
              <td className="right data">{proj.ups}</td>
            </tr>
          );
        })}
      </tbody>
    );
  },
  popKloudless: function(e) {
    var explorer = Kloudless.explorer({
      app_id: "np22ljmqOXa8EK_AbNxlrvC9U8Z96piPFlm7HaUWi3SuCG9Z",
      display_backdrop: true,
      multiselect: true,
      copy_to_upload_location: true,
      upload_location_account: 77766263,
      upload_location_folder: "Fp5LPTwhKGpRoTTd1TD1skZfIpWW61k1AOcPuMDVlNK4=",
    });

    explorer.choose();

    explorer.on('success', this.handleFiles);
  },
  handleFiles: function(files) {
    this.setState({files: files});
  }
});

var ProjectCell = React.createClass({
  render: function() {
    return (
      <td>
        {this.props.project.name}
      </td>
    )
  }
})

domready(function() {
  React.render(
    <MyApp />,
    document.body
  );
});
