import React from "react"
const Audio = ({ audioSrcURL, audioTitle, ...props }) => (
  <div className="audio">
    <iframe
      src={audioSrcURL}
      title={audioTitle}
      controls
      allow="encrypted-media"
      allowtransparency="true"
      loop="0"
      frameBorder="0"
      width="300"
      height="380"
    />
  </div>
)
export default Audio