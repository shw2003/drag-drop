// src/App.js
import React, { useState } from "react";
import Draggable from "./Draggable";
import "./App.css";

const App = () => {
  const initialWidth = 200;
  const initialHeight = 200;
  const increaseFactor = 20;

  const [components, setComponents] = useState([
    {
      key: 0,
      title: "Title (child)",
      width: initialWidth,
      height: initialHeight,
      component: (
        <Draggable
          title="Title (child)"
          key={0}
          width={initialWidth}
          height={initialHeight}
        />
      ),
    },
  ]);

  const addParent = () => {
    const newKey = components.length;
    const newTitle = `Title (after click ${newKey})`;
    const newWidth = components[components.length - 1].width + increaseFactor;
    const newHeight = components[components.length - 1].height + increaseFactor;

    setComponents((prevComponents) => [
      ...prevComponents,
      {
        key: newKey,
        title: newTitle,
        width: newWidth,
        height: newHeight,
        component: (
          <Draggable
            title={newTitle}
            key={newKey}
            width={newWidth}
            height={newHeight}
          >
            {prevComponents[prevComponents.length - 1].component}
          </Draggable>
        ),
      },
    ]);
  };

  return (
    <div className="App">
      <button onClick={addParent}>Add Parent</button>
      {components[components.length - 1].component}
    </div>
  );
};

export default App;
