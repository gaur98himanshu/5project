import React, { useEffect } from "react";

const UseEffect = () => {
  const initialData = 0;
  const [myNum, setmyNum] = React.useState(initialData);

  useEffect(() => {
    document.title = `chat(${myNum})`;
  });
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setmyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  );
};

export default UseEffect;
