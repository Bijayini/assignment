import React, {Component} from 'react';
import { Link } from "react-router-dom";

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
    return(
      <header className="header">
        <div className="header-content wrap">
          <Link className="brand" to="/">Todo List</Link>
          <Button variant="secondary" size="small" onClick={this.toggleOverlay}>Create Task</Button>
          {isOverlayOpen &&
          <CreateTask toggleOverlay={this.toggleOverlay}/>
          }
        </div>
      </header>);
  }
}

export default Header;