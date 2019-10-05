import React from 'react';

const myContext = React.createContext(
    {
        playersList: [],
        addPlayer: () => {}
    }
);

export default myContext;