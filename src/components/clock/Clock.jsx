import { useState, useEffect } from 'react';

function Clock() {
 const [time, setTime] = useState('');

 useEffect(() => {
     const timer = setInterval(() => {
         let date = new Date();
         let hours = date.getHours();
         let minutes = date.getMinutes();
         let seconds = date.getSeconds();
         let ampm = hours >= 12 ? 'pm' : 'am';
         hours = hours % 12;
         hours = hours ? hours : 12; // the hour '0' should be '12'
         minutes = minutes < 10 ? '0'+minutes : minutes;
         seconds = seconds < 10 ? '0'+seconds : seconds;
         let strTime = hours + ':' + minutes + ':' + seconds + ampm;
         setTime(strTime);
     }, 1000);

     // Limpiar el intervalo cuando el componente se desmonte
     return () => {
         clearInterval(timer);
     };
 }, []);

 return (
   <span className="font-bold">{time}</span>
 );
}

export default Clock;
