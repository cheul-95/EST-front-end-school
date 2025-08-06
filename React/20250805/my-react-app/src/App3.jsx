import data from "./data.jsx";

function App() {
    // console.log(data);
    return (
        <>
            <h1>Book List</h1>
            <label htmlFor="search">검색 : </label>
            <input type="text" id="search" placeholder="책 제목을 입력하세요" />
            {data.map((book, index) => {
                return (
                    <section key={index}>
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                    </section>
                );
            })}
        </>
    );
}

export default App;
