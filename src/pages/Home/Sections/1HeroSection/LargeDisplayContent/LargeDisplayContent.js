import React from "react"
import { ReactComponent as IPhone11 } from "../../../../../assets/texts/iphone11.svg"

import "./large-display-content.scss"

function LargeDisplayContent() {
  return (
    <div className="large-display-content">
      <div className="sticky-content">
        <IPhone11 className="iphone-text hero-title-start will-change" />
        <div className="device-container">
          {/* video goes here */}
          <div className="hardware-container">
            <div className="hardware-wrapper">
              <div className="screen"></div>
              <div className="hardware"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LargeDisplayContent
