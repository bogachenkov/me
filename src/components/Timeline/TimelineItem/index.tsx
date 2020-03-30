import React from 'react';
import './style.scss';

interface TimelineItemProps {
  date: string;
  position: string;
  org: string;
  description?: string;
}

const TimelineItem:React.FC<TimelineItemProps> = ({ date, position, org, description }) => {
  return (
    <li className="TimelineItem">
      <div className="TimelineItem--content">
        <h3 className="TimelineItem--date">{ date }</h3>
        <p className="TimelineItem--org">{ org }</p>
        <h3 className="TimelineItem--position">{ position }</h3>
        <p className="TimelineItem--desc">{ description }</p>
      </div>
    </li>
  );
};

export default TimelineItem;