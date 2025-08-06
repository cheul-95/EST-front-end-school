import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";

function Header({ authors }) {
    const location = useLocation();
    const currentAuthor = location.pathname.slice(1);
    return (
        <header>
            <h1>블로그 데이터</h1>
            <nav className="blog-nav">
                <ul className="blog-ul">
                    {authors.map((author) => (
                        <li key={author} className={`blog-li ${currentAuthor === author ? "active" : ""}`}>
                            <Link to={`/${author}`}>{author}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

function AuthorPage({ allData }) {
    const { author } = useParams();
    const navigate = useNavigate();
    const filteredData = allData.filter((item) => item.author === author);
    useEffect(() => {
        if (allData.length > 0 && filteredData.length === 0) {
            navigate("/");
        }
    }, [author, allData, filteredData, navigate]);
    return (
        <section className="section">
            <h2 className="section-author">{author}</h2>
            {filteredData.length === 0 ? (
                <p className="section-none">게시글이 없습니다.</p>
            ) : (
                filteredData.map((item, i) => (
                    <article className="section-article" key={i}>
                        <h3 className="section-title">{item.title}</h3>
                        <p className="section-content">{item.content}</p>
                        <p className="section-date">
                            <small>{item.date}</small>
                        </p>
                    </article>
                ))
            )}
        </section>
    );
}

function HomePage({ allData }) {
    return (
        <div>
            <h2>홈</h2>
            <p>작가를 선택해주세요.</p>
            <ul>
                {allData.map((item, i) => (
                    <li key={i}>
                        {item.title} - {item.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function App() {
    const [allData, setAllData] = useState([]);
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        fetch("https://dev.wenivops.co.kr/services/fastapi-crud/1/blog")
            .then((res) => res.json())
            .then((json) => {
                setAllData(json);
                const uniqueAuthors = [...new Set(json.map((item) => item.author))];
                setAuthors(uniqueAuthors);
            })
            .catch((err) => console.error(err));
    }, []);
    return (
        <BrowserRouter>
            <Header authors={authors} />
            <Routes>
                <Route path="/" element={<HomePage allData={allData} />} />
                <Route path="/:author" element={<AuthorPage allData={allData} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
