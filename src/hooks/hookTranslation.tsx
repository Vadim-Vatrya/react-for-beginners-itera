import React from 'react';
import { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';


const useTranslation = () => {
    const {isTranslated, setIsTranslated} = useContext(LanguageContext);
    let [searchParams] = useSearchParams();

    const ln = searchParams.get('ln');

    useEffect(() => {
        if (ln === "ua") {
            setIsTranslated(true);
        } else {
            setIsTranslated(false);
        }
    }, [ln, setIsTranslated, isTranslated]);

    // return (
    //     <div>
            
    //     </div>
    // );
};

export default useTranslation;