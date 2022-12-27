import React, { useState } from "react";
import FormInput from "./component/FormInput";
import List from "./component/List";
import Footer from "./component/Footer";
import { DataProvider } from "./component/DataProvider";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>ToDo List</h1>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}

export default App;
