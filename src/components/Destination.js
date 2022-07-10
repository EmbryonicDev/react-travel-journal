import React from "react";
import locationIcon from '../assets/location-icon.png'

export default function Destination(props) {
  return (
    <div className="destination">
      <img className="locationImg" src={props.item.imageUrl} alt=""></img>
      <div className="entryText">
        <div className="locationWrap">
          <div className="iconAndText">
            <img src={locationIcon} alt=''></img>
            <h3>{props.item.location}</h3>
          </div>
          <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="title">{props.item.title}</h1>
        <h3 className="dates">{`${props.item.startDate} - ${props.item.endDate}`}</h3>
        <p className="description">{props.item.description}</p>
      </div>
    </div>
  )
}