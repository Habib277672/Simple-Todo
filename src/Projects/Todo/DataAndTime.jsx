import React, { useEffect, useState } from "react";
export const DataAdndTime = () => {
  const [datetime, setDatetime] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();
      const formattedDate = current.toLocaleDateString();
      const currentTime = current.toLocaleTimeString();
      setDatetime(`${formattedDate} - ${currentTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time">{datetime}</h2>;
};
