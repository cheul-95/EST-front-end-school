import useLang from "./Hook/useLang";
// 언어 변경 횟수 카운터 추가
import useCounter from "./Hook/useCounter";
import { useTheme } from "./Hook/themes.js";
export default function LangSelector() {
    const { theme } = useTheme();
    const { languageData, currentLanguage, changeLanguage } = useLang();
    // 언어 변경 횟수 카운터 추가
    const { count, onIncrease, onReset, langState } = useCounter();

    return (
        <>
            <h2 className={`${theme.h2}`}>{languageData.languageSelector}</h2>
            {/* 언어 변경 횟수 카운터 추가 */}
            <p className={`${theme.p}`}>언어를 {count}번 변경하였습니다.</p>
            <p className={`${theme.p}`}>영어: {langState.en}번</p>
            <p className={`${theme.p}`}>한국어: {langState.ko}번</p>
            <p className={`${theme.p}`}>일본어: {langState.ja}번</p>
            <button
                className={`${theme.button}`}
                onClick={() => {
                    changeLanguage("en");
                    // 언어 변경 횟수 카운터 추가
                    onIncrease("en");
                }}
                disabled={currentLanguage === "en"}
            >
                English
            </button>
            <button
                className={`${theme.button}`}
                onClick={() => {
                    changeLanguage("ko");
                    // 언어 변경 횟수 카운터 추가
                    onIncrease("ko");
                }}
                disabled={currentLanguage === "ko"}
            >
                한국어
            </button>
            <button
                className={`${theme.button}`}
                onClick={() => {
                    changeLanguage("ja");
                    // 언어 변경 횟수 카운터 추가
                    onIncrease("ja");
                }}
                disabled={currentLanguage === "ja"}
            >
                日本語
            </button>
            {/* 언어 변경 횟수 카운터 추가 */}
            <button
                className={`${theme.button}`}
                onClick={() => {
                    onReset();
                }}
            >
                카운터 리셋
            </button>
        </>
    );
}
