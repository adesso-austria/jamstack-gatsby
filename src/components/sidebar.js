import React from "react";
import { elastic as Menu } from "react-burger-menu";
import './sidebar.scss';
import { Link } from 'gatsby'; 

export default props => {
  const routes = props.routes;
  return (
    // Pass on our props
    <Menu {...props}>
      <div className='list'>
          {
              routes.map(route => {
                return (<div className='item' key={route.title}>
                    <Link activeClassName='active' to={route.url.toString()}>{route.title.toUpperCase()}</Link>
                </div>)
              })
          }
        </div>
    </Menu>
  );
};
