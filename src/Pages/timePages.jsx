import React, {useEffect} from "react";
import '../styles/time.css'

export const Time = () => {

  const locale = 'en';
  const [today, setDate] = React.useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  }, []);

  const day = today.toLocaleDateString(locale, {weekday: "long"});
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {month: 'long'})}`;

  const time = today.toLocaleTimeString(locale, {
    hour: 'numeric',
    hour24: true, minute: 'numeric',
    second: 'numeric'
  });


  return (
    <div className='time-wrapper'>
      <h3>
        {date}
      </h3>
      <h4>
        {time}
      </h4>
    </div>
  )
}