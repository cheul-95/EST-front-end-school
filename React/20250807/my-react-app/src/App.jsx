import { useContext, useState, createContext } from "react";
const languages = {
    en: {
        title: "Multi-language App",
        greeting: "Hello, welcome to our app!",
        description: "This app supports multiple languages.",
        languageSelector: "Select Language:",
    },
    ko: {
        title: "다국어 앱",
        greeting: "안녕하세요, 우리 앱에 오신 것을 환영합니다!",
        description: "이 앱은 여러 언어를 지원합니다.",
        languageSelector: "언어 선택:",
    },
    ja: {
        title: "多言語アプリ",
        greeting: "こんにちは、私たちのアプリへようこそ！",
        description: "このアプリは複数の言語をサポートしています。",
        languageSelector: "言語を選択：",
    },
};
const BtnTitle = {
    en: {
        btnTitle: "English",
    },
    ko: {
        btnTitle: "한국어",
    },
    ja: {
        btnTitle: "日本語",
    },
};
Object.keys(languages).map((item) => {
    languages[item].btnTitle = BtnTitle[item].btnTitle;
});
const MyContext = createContext();
function App() {
    const [selLang, setSelLang] = useState("en");
    return (
        <>
            <MyContext.Provider value={{ languages, setSelLang, selLang }}>
                <LanguageList />
            </MyContext.Provider>
        </>
    );
}

function LanguageList() {
    const { languages, selLang, setSelLang } = useContext(MyContext);
    return (
        <>
            <h1>{languages[selLang].languageSelector}</h1>
            <ul>
                {Object.keys(languages).map((item) => {
                    return (
                        <li key={item}>
                            <button onClick={() => setSelLang(item)}>{languages[item].btnTitle}</button>
                        </li>
                    );
                })}
            </ul>
            <hr />
            <h2>{languages[selLang].title}</h2>
            <p>{languages[selLang].greeting}</p>
            <p>{languages[selLang].description}</p>
        </>
    );
}

export default App;
