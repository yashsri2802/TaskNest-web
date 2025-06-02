import { useEffect, useState } from "react";

export const TodoDate = () => {
  const getFormattedDateTime = () => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return `${formattedDate} - ${formattedTime}`;
  };

  // ✅ Set initial time directly
  const [dateTime, setDateTime] = useState(getFormattedDateTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(getFormattedDateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};
