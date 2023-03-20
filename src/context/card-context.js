import React, { createContext, useState } from 'react';

export const CardContext = createContext({
    cardRef: null,
    setCardRef: () => null,
})

export const CardContextProvider = ({children}) => {

    const [cardRef, setCardRef] = useState(null);
    
    const value = { cardRef, setCardRef}
    return (
        <CardContext.Provider value={value}>
        {children}
        </CardContext.Provider>
    );
}