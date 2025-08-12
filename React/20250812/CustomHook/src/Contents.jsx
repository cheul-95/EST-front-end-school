import { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";
import useLang from "./Hook/useLang";
import useToggle from "./Hook/useToggle";
import { useTheme } from "./Hook/themes.js";
export default function Contents() {
    const { languageData, currentLanguage } = useLang();
    const { languages } = useContext(LanguageContext);
    const [isToggled, toggle] = useToggle(false);
    const { theme } = useTheme();
    const showBtn = currentLanguage !== "ko";
    const translation = languages.ko;

    return (
        <>
            {showBtn && (
                <button onClick={toggle} className={`${theme.button}`}>
                    {isToggled ? "🌐 번역 숨기기" : "🌐 번역보기"}
                </button>
            )}
            <h3 className={`${theme.h3}`}>{languageData.title}</h3>
            {isToggled && showBtn && <h4>🌐 {translation.title}</h4>}

            <p className={`${theme.p}`}>{languageData.greeting}</p>
            {isToggled && showBtn && <h4>🌐 {translation.greeting}</h4>}

            <p className={`${theme.p}`}>{languageData.description}</p>
            {isToggled && showBtn && <h4>🌐 {translation.description}</h4>}
        </>
    );
}
