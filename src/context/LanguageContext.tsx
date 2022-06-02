import { createContext, ReactNode, useState } from 'react'

interface ILanguageContext {
  isTranslated: boolean,
  setIsTranslated: (fn: boolean) => void,
};

export const LanguageContext = createContext({} as ILanguageContext);




const TranslationProvider = ({children, }: {children: ReactNode | ReactNode[]}) => {
  const [isTranslated, setIsTranslated] = useState(false);

  const isTranslatedValue = {
    isTranslated,
    setIsTranslated,
  };

  return (
    <LanguageContext.Provider value={isTranslatedValue}>
      {children}
    </LanguageContext.Provider>
  )
};

export default TranslationProvider;