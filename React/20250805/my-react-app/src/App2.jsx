// 잘 사용하는 이벤트 종류

// 1 onClick: 클릭이벤트
// 2 onChange: input, select, textarea의 값이 변경될 때 발생하는 이벤트
// 3 onSubmit: form이 제출될 때 발생하는 이벤트

function log(event) {
    console.log("Input changed:", event.target.value);
}

function App() {
    return (
        <>
            <input type="text" onChange={log} />
        </>
    );
}

export default App;
