import React , { useState } from 'react';

const Clock = () => {
    const [date, setDate] = useState(new Date());
   
     React.useEffect(() => {
        const timer = setInterval(() => {
       
         setDate(new Date());
          }, 1000);
          return () => {
            clearInterval(timer);
         };
          },[])

    return (
        <div>
            {date.toLocaleTimeString()}
        </div>
    );
};
export default Clock;
