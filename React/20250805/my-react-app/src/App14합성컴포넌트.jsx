// 합성 컴포넌트 예시

function Card({ children }) {
    console.log(children);
    return <div className="card">{children}</div>;
}

function CardTitle({ children }) {
    return <h2 className="card-title">{children}</h2>;
}

function CardContent({ children }) {
    return <div className="card-content">{children}</div>;
}

// 합성 컴포넌트 만들기
Card.Title = CardTitle;
Card.Content = CardContent;

function App() {
    return (
        <>
            <Card>
                <Card.Title>제목</Card.Title>
                <Card.Content>내용</Card.Content>
            </Card>
        </>
    );
}

export default App;
