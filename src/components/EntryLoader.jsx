import { useEffect, useState } from "react";

const EntryLoader = () => {
    const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div id="entry-loader" className={hideLoader ? "hide-loader" : ""}>
    <h1>INNOVATIVE</h1>
    <h1>PROACTIVE</h1>
    <h1>COLLABORATIVE</h1>
  </div>
  );
};

export default EntryLoader;
