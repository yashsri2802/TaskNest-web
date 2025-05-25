import { useEffect, useState } from "react";

export const TodoDate = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    //to avoid memory leak, we use cleanup function.
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString("en-US", { hour12: true });
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval); //cleanup function to clear the interval when the component unmounts.
  }, []);
  return <h2 className="date-time">{dateTime}</h2>;
};
