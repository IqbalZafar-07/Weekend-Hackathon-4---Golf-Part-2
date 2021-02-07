import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  const handler  = (event)=>{
      // let left1 = ballPosition.left;
      // let top1 = ballPosition.top;
      // let xx = 0, yy = 0;
      event.preventDefault();
      // console.log(xx++,yy++);
      switch(event.keyCode){
        case 39:
          setX(
            (x+5)
          );
          break;
        case 40:
          setY(
            (y + 5)
          );
          break;
        case 38:
          setY(
            (y - 5)
          );
          break;
        case 37:
          setX(
            (x-5)
          );
          break;
      }
      setBallPosition({
            left : `${x}px`,
            top : `${y}px`
          });
    };
  //   setBallPosition({
  //     left : x,
  //     top : y
  //   });
  // }
  // } )
  useEffect(() => {
    document.addEventListener("keydown", handler); /*=> {
      // let left1 = ballPosition.left;
      // let top1 = ballPosition.top;
      let xx = 0, yy = 0;
      event.preventDefault();
      console.log(xx++,yy++);
      switch(event.keyCode){
        case 39:
          setX(
            (x+5)
          );
          break;
        case 40:
          setY(
            (y + 5)
          );
          break;
        case 38:
          setY(
            (y - 5)
          );
          break;
        case 37:
          setX(
            (x-5)
          );
          break;
      }
      return {
        document.removeEvaentListner("keydown");
      }
    });
    setBallPosition({
      left : x,
      top : y
    });*/
    return () => {
      document.removeEventListener("keydown", handler);
    }
  }, [x,y]);
  const buttonClickHandler = () => {
    setRenderBall(true);
  };
  const reset = () => {
    window.location.reload();
  };
  const renderChoice = () => {
    if(renderBall) {
      return <div 
                className = "ball"
                style = {{
                  left : ballPosition.left,
                  top : ballPosition.top,
                  position :"absolute"
                }}

            ></div>
    }else{
      return <button className = "start" onClick={buttonClickHandler}>Play</button>
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
