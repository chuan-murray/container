import {createRoot} from "react-dom/client";
import React from "react";
import Button from "library/src/components/Button/Button.jsx"

const el = document.getElementById("app");
const root = createRoot(el)
root.render(<Button>Hello World</Button>)
