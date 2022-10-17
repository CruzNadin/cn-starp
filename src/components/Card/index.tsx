import React from "react";
import "./style.sass";

interface CardProps {
  actions?: Array<any>;
  avatar: any;
}

/* 

.card-body > card-body--reversed
    Responsive appearance, inverts items.

*/

export default function Card({ actions = [], avatar }: CardProps) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-info">
          <div className="card-title">Kadir Barcın</div>
          <div className="card-text">Team Lead</div>
          {actions?.length > 0 && <div>{actions?.map((el) => el)}</div>}
        </div>
        {avatar && <div className="card-avatar">{avatar}</div>}
      </div>
    </div>
  );
}
