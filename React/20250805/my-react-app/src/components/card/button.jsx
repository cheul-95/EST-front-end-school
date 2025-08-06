function button({ label, onClick }) {
    return (
        <a onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2 w-fit">
            {label}
        </a>
    );
}
export default button;
