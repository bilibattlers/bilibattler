import React from "react"
import "./styles.css"

export default function Newdash() {
  return (
    <div className="newdash flex-col-hstart-vstart clip-contents">
      <div className="flex-col-hcenter">
        <div className="navigation-bar-left-aligned-back flex-col-hstart-vstart">
          <p className="txt-763">Dashboard</p>
          <img
            src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/578b/eab8/76151be941b85fefd588483c2c999a32"
            alt="image not found"
            className="status-bar-black"
          />
        </div>
        <p className="txt-262 flex-hcenter">00:30:01</p>
        <p className="txt-971 flex-hcenter">Phototherapy Duration</p>
        <p className="txt-188 flex-hcenter">Stop</p>
      </div>
      <div className="ios-tab-bar flex-col-hstart-vstart">
        <div className="top-divider" />
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/dycZSliHUXO99kdCGSW3zD-328%3A2564?alt=media&token=bec2aa94-021c-44e5-b463-06c1955a3816"
        alt="image not found"
        className="avatar-small"
      />
      <div className="data-list flex-col">
        <p className="txt-448">Bilirubin Levels</p>
        <div className="list flex-col-hstart-vstart">
          <div className="data-graph-result flex-row-vstart-hstart">
            <div className="icon" />
            <p className="txt-524">7:00 pm</p>
            <p className="txt-441 flex-hend">19 mg/dL</p>
          </div>
          <div className="data-graph-result flex-row-vstart-hstart">
            <div className="icon-1" />
            <p className="txt-227">8:00 pm</p>
            <p className="txt-441 flex-hend">14 mg/dL</p>
          </div>
          <div className="data-graph-result flex-row-vstart-hstart">
            <div className="icon-1" />
            <p className="txt-4110">9:00 pm</p>
            <p className="txt-441 flex-hend">13 mg/dL</p>
          </div>
          <div className="data-graph-result-1 flex-row-vstart-hstart">
            <div className="icon-1" />
            <p className="txt-4110">10:00 pm</p>
            <p className="txt-441 flex-hend">5 mg/dL</p>
          </div>
        </div>
      </div>
      <div className="data-list-1 flex-col-hstart-vstart">
        <p className="txt-353">Battery</p>
        <div className="list-2 flex-col-hstart-vstart">
          <div className="data-graph-result-1 flex-row-vstart-hstart">
            <div className="icon" />
            <p className="txt-828">25%</p>
            <p className="txt-441 flex-hend">~ 30 min </p>
          </div>
        </div>
      </div>
    </div>
  )
}