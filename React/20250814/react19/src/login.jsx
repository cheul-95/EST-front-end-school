import { useActionState } from "react";

export default function Login() {
    const [state, formAction, isPending] = useActionState(
        async (previousState, formData) => {
            const userName = formData.get("userName");
            const password = formData.get("password");
            if (!userName || !password) {
                return { success: false, message: "아이디와 비밀번호를 모두 입력해주세요." };
            }

            try {
                const response = await fetch("http://localhost:3001/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        userName: userName,
                        password: password,
                    }),
                });
                const result = await response.json();
                if (!response.ok) {
                    if (result.message) {
                        return { success: false, message: result.message };
                    }
                    return { success: false, message: "로그인에 실패했습니다." };
                } else {
                    return { success: true, message: `로그인 성공! ${result.user.userName}님 환영합니다.` };
                }
            } catch (error) {
                return { success: false, message: `서버 연결 실패: ${error.message}` };
            }
        },
        { success: false, message: "" } // 초기 상태
    );

    return (
        <div>
            <h2>로그인</h2>
            <form action={formAction} className="contact-form">
                <div>
                    <label htmlFor="userName">
                        아이디:
                        <input
                            id="userName"
                            name="userName"
                            type="text"
                            placeholder="아이디를 입력하세요"
                            disabled={isPending}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        비밀번호:
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            disabled={isPending}
                        />
                    </label>
                </div>
                <button type="submit" disabled={isPending}>
                    {isPending ? "전송 중..." : "전송하기"}
                </button>
                <button type="reset" disabled={isPending}>
                    초기화
                </button>{" "}
                {/* {/* 상태 메시지 표시 */}
                {state.message && (
                    <div className={`message ${state.success ? "success" : "error"}`} name="loginMessage">
                        {state.message}
                    </div>
                )}
            </form>
        </div>
    );
}
