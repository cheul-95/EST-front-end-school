import data from "./data.jsx";
import { useState } from "react";

function App() {
    // console.log(data);

    const [searchKeyword, setSearchKeyword] = useState("");
    const filteredData = data.filter((book) => {
        return book.title.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase());
    });
    function search(e) {
        setSearchKeyword(e.target.value);
    }

    return (
        <>
            <h1>Book List</h1>
            <label htmlFor="search">검색 : </label>
            <input type="text" id="search" onChange={search} value={searchKeyword} placeholder="책 제목을 입력하세요" />
            {filteredData.map((book, index) => {
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
