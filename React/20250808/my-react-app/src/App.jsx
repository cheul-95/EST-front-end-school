import { useState, useContext, createContext } from "react";
// 사용자 정보와 로그인 상태는 context로 관리
// 로그인 폼에서 username과 password 입력
// 로그인 성공 시 환영 메시지와 로그아웃 버튼 표시
// 로그인 실패 시 "아이디 또는 비밀번호가 틀렸습니다" 표시
const LoginContent = createContext();
const users = [
    { id: 1, username: "user1", password: "1234", name: "김철수" },
    { id: 2, username: "user2", password: "5678", name: "이영희" },
    { id: 3, username: "admin", password: "admin", name: "관리자" },
];
function App() {
    const [loginStatus, setLoginStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    return (
        <>
            <LoginContent.Provider value={{ loginStatus, setLoginStatus, errorMessage, setErrorMessage }}>
                <Header />
                <Main />
            </LoginContent.Provider>
            <Footer />
        </>
    );
}
function Header() {
    return (
        <header>
            <Nav />
        </header>
    );
}
function Nav() {
    return (
        <nav>
            <Li />
        </nav>
    );
}
function Li() {
    const { loginStatus } = useContext(LoginContent);
    return <li>{loginStatus === false && <LoginForm />}</li>;
}
function Main() {
    const { loginStatus } = useContext(LoginContent);
    return <li>{loginStatus === true && <WelcomeForm />}</li>;
}
function Footer() {}
function WelcomeForm() {
    return <main>Welcome</main>;
}
function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setLoginStatus, errorMessage, setErrorMessage } = useContext(LoginContent);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            login(username, password);
        }
    };
    function login(username, password) {
        const user = users.find((user) => user.username === username && user.password === password);
        if (user) {
            setLoginStatus(true);
        } else {
            setErrorMessage("아이디 또는 비밀번호가 틀렸습니다");
        }
    }
    return (
        <>
            <main>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            className="userName"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className="userPassword"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="loginBtn">
                            로그인
                        </button>
                    </div>
                </form>
            </main>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        </>
    );
}

export default App;
