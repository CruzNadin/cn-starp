import React from "react";
import "./style.sass";
export default function Alert() {
  return (
    <div role="alert">
      <div className="alert-body">
        <div className="alert-icon">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="svg-icon--material svg-icon"
            data-name="Material--Info"
            width="30"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path
              d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z"
              opacity="0.3"
            ></path>
            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
          </svg>
        </div>
        <div className="alert-text">
          <span>Congratulations! 🎉</span>
          <span>You have reached your monthly sales targets.</span>
        </div>
      </div>
    </div>
  );
}
