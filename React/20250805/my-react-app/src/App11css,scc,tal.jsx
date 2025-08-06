//1. css 파일을 import 합니다.
import "./test.css";
// 2. scss 파일을 import 합니다.
// 모듈이 설치가 안되어 있으면 읽어오지 못합니다.
// npm install -D sass-embedded
import "./Test.scss";
import SectionTest from "./SectionTest.jsx";
// 4. tailwindcss 적용 - 설치형
// npm install @tailwindcss/vite

// 1. npm install @tailwindcss/vite

// 2. vite.config.js에 tailwindcss 추가
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
//
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(), // 이것만 추가하면 됨!
//   ],
// })

// 3. index.css 추가
// @import "tailwindcss";
function App() {
    return (
        <>
            <section>
                <h1>안녕하세요 H1</h1>
                <h2>안녕하세요 H2</h2>
                <h2 className="text-3xl font-bold">안녕하세요</h2>
            </section>
            <SectionTest />
        </>
    );
}

export default App;
