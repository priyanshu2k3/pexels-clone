import React from "react";

const Appcontext=React.createContext();

function AppProvider(props){
  const term=props.term
    return(<Appcontext.Provider   value={term}>
      {props.children}
    </Appcontext.Provider>)
};

export {Appcontext,AppProvider};