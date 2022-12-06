import React , { useState } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());
   
     React.useEffect(() => {
        setInterval(() => {
       
         setDate(new Date());
          }, 1000);
          return () => {
            clearInterval(setInterval);
         };
          },[date])

    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    );
};
export default Clock;
