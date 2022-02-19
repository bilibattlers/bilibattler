import React from "react"
import "./styles.css"
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import ControlButtons from "./Components/ControlButtons/ControlButtons";

export default function Newdash() {
  return (
    <div className="newdash flex-col-hstart-vstart clip-contents">
      <div className="flex-col-hcenter">
        <div className="navigation-bar-left-aligned-back flex-col-hstart-vstart">
          <p className="txt-366">Dashboard</p>
        </div>
        <p className="txt-921">Phototherapy Duration</p>
        <p className="txt-169 flex-hcenter"><StopWatch /></p>

      </div>
      
      <div className="ios-tab-bar flex-col-hstart-vstart">
        <div className="top-divider" />
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/dycZSliHUXO99kdCGSW3zD-328%3A2564?alt=media&token=9f95c9b1-5c81-417a-936f-296d5b108dbf"
        alt="image not found"
        className="avatar-small"
      />
      <div className="data-list flex-col">
        <p className="txt-41010">Bilirubin Levels</p>
        <div className="list flex-col-hstart-vstart">
          <div className="data-graph-result flex-row-vstart-hstart">
            <div className="icon" />
            <p className="txt-816">7:00 pm</p>
            <p className="txt-7310 flex-hend">19 mg/dL</p>
          </div>
          <div className="data-graph-result flex-row-vstart-hstart">
            <div className="icon-1" />
            <p className="txt-730">8:00 pm</p>
            <p className="txt-7310 flex-hend">14 mg/dL</p>
          </div>
          <div className="data-graph-result flex-row-vstart-hstart">
            <div className="icon-1" />
            <p className="txt-278">9:00 pm</p>
            <p className="txt-7310 flex-hend">13 mg/dL</p>
          </div>
          <div className="data-graph-result-1 flex-row-vstart-hstart">
            <div className="icon-1" />
            <p className="txt-278">10:00 pm</p>
            <p className="txt-7310 flex-hend">5 mg/dL</p>
          </div>
        </div>
      </div>
      <div className="data-list-1 flex-col-hstart-vstart">
        <p className="txt-907">Battery</p>
        <div className="list-2 flex-col-hstart-vstart">
          <div className="data-graph-result-1 flex-row-vstart-hstart">
            <div className="icon" />
            <p className="txt-270">25%</p>
            <p className="txt-7310 flex-hend">~ 30 min </p>
          </div>
        </div>
      </div>
    </div>
  )
}
