import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

import Button from "../ui-components/Button";

import CreateTaskContainer
    from "../containers/CreateTaskContainer";

import labels from "../labels/Task.labels";
import {routePaths} from "../utils/config";

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

  render() {
      const {isOverlayOpen} = this.state;
      const {location: {pathname}} = this.props;
      return (
          <header className="header">
              <div className="header-content wrap">
                  <Link className="brand" to={routePaths.HOME}>Todo
                      List</Link>
                  {pathname === routePaths.TASKS &&
                  <Button variant="secondary" size="small"
                          onClick={this.toggleOverlay} classList="create-task">{labels.create_task}</Button>}
                  {isOverlayOpen && <CreateTaskContainer
                      toggleOverlay={this.toggleOverlay}/>}
              </div>
          </header>
      );
  }
};

export default withRouter(Header);

export {Header};