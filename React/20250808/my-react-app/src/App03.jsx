import { useContext, useState, createContext } from "react";
const themes = {
    light: {
        name: "라이트 모드",
        container: "bg-white text-gray-900",
        card: "bg-gray-100 border-gray-300",
        button: "bg-blue-500 hover:bg-blue-600 text-white",
        header: "bg-gray-200 text-gray-900",
        footer: "border-gray-300",
    },
    dark: {
        name: "다크 모드",
        container: "bg-gray-900 text-white",
        card: "bg-gray-800 border-gray-700",
        button: "bg-green-500 hover:bg-green-600 text-white",
        header: "bg-gray-800 text-white",
        footer: "border-gray-700",
    },
};
const MyContext = createContext();
function App() {
    const [theme, setTheme] = useState(themes.light);

    return (
        <MyContext.Provider value={{ theme, setTheme, themes }}>
            <div className={theme.container}>
                <Header />
                <Main />
                <Footer />
            </div>
        </MyContext.Provider>
    );
}

function Header() {
    const { theme, setTheme } = useContext(MyContext);
    return (
        <header className={theme.header}>
            <h1>헤더영역입니다</h1>
            <button
                className={theme.button}
                type="button"
                onClick={() => {
                    if (theme.name == "라이트 모드") {
                        setTheme(themes.dark);
                    } else {
                        setTheme(themes.light);
                    }
                }}
            >
                {theme.name}
            </button>
        </header>
    );
}
function Main() {
    return (
        <main>
            <Card />
        </main>
    );
}
function Card() {
    const { theme } = useContext(MyContext);
    return (
        <>
            <div className={theme.card}>카드1</div>
            <div className={theme.card}>카드2</div>
            <div className={theme.card}>카드3</div>
            <div className={theme.card}>카드4</div>
        </>
    );
}
function Footer() {
    const { theme } = useContext(MyContext);
    return <footer className={theme.footer}>푸터영역입니다</footer>;
}
export default App;
