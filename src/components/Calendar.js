import React, { useState } from 'react';
import '../App.css';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';

import moment from 'moment';

function MyTimeline() {
     const groups = [
      { 
        id: 1, title: 'PDS-REM01'
      },
      { id: 2, title: 'PDS-RME03'},
      {id: 3, title: 'PDS-RME04' }
     ];
    const items = [
      {
        id: 1,
        group: 1,
        title: 'ISS-04',
        start_time: moment(),
        end_time: moment().add(1, 'hour')
      },
      {
        id: 2, 
        group:2, 
        title: 'Galaxy 5',
        start_time: moment(),
        end_time: moment().add(2, 'hour')
      },
      {
        id: 3, 
        group: 3, 
        title: 'Galaxy 6',
        start_time: moment(),
        end_time: moment().add(2, 'hour')
      }
           // ...
    ];
  const [visibleTimeStart, setVisibleTimeStart] = useState(moment().startOf('day').valueOf());
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(moment().endOf('day').valueOf());

  const onTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
    setVisibleTimeStart(visibleTimeStart);
    setVisibleTimeEnd(visibleTimeEnd);
    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
  };
  const handleZoomIn = () => {
  const newStart = visibleTimeStart + (visibleTimeEnd - visibleTimeStart) * 0.25;
  const newEnd = visibleTimeEnd - (visibleTimeEnd - visibleTimeStart) * 0.25;
  setVisibleTimeStart(newStart);
  setVisibleTimeEnd(newEnd);
};

const handleZoomOut = () => {
  const newStart = visibleTimeStart - (visibleTimeEnd - visibleTimeStart) * 0.25;
  const newEnd = visibleTimeEnd + (visibleTimeEnd - visibleTimeStart) * 0.25;
  setVisibleTimeStart(newStart);
  setVisibleTimeEnd(newEnd);
};

    return (
     <div>
      <button onClick={handleZoomOut}>Zoom Out</button>
      <button onClick={handleZoomIn}>Zoom In</button>





      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        onTimeChange={onTimeChange}
      />
      </div>
    );
  }
export default MyTimeline;
