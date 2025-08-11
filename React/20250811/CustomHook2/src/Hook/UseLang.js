import { useContext } from "react";
import { LanguageContext } from "../LanguageProvider";

const useLang = () => {
    const context = useContext(LanguageContext);
    const { currentLanguage, setLanguage } = context;

    return {
        currentLanguage,
        setLanguage,
    };
};

export default useLang;
