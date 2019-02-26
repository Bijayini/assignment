import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

import Button from "../ui-components/Button";

import CreateTask from "../containers/CreateTask";

class Header extends Component{
  constructor(){
    super();
    this.state = {
      isOverlayOpen:false
    }
  }

  toggleOverlay=()=>{
    this.setState({
      isOverlayOpen:!this.state.isOverlayOpen
    })
  };

  render(){
    const {isOverlayOpen} = this.state;
    const {location:{pathname}} = this.props;
    return(
      <header className="header">
        <div className="header-content wrap">
          <Link className="brand" to="/">Todo List</Link>
          {pathname ==='/todos' && <Button variant="secondary" size="small" onClick={this.toggleOverlay}>Create Task</Button>}
          {isOverlayOpen &&
          <CreateTask toggleOverlay={this.toggleOverlay}/>
          }
        </div>
      </header>);
  }
}

export default withRouter(Header);

export {Header};