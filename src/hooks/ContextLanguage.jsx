import { createContext, useState } from "react";

export const LanguageF = createContext();

export const ContextLanguage = ({ children }) => {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageF.Provider value={{language, setLanguage}}>
            {children}
        </LanguageF.Provider>
    ) 
}

