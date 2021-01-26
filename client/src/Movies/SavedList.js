import React from 'react';
import {Link, useRouteMatch } from 'react-router-dom'

export default function SavedList(props) {

  const {lists} = props;


  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button">Home</div>
    </div>
  );
}
