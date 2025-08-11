import useLang from "./Hook/useLang";
export function Content() {
    const { currentLanguage } = useLang();
    return (
        <>
            <h2>{currentLanguage.title}</h2>
            <div>
                <p>{currentLanguage.greeting}</p>
                <p>{currentLanguage.description}</p>
            </div>
        </>
    );
}

export default Content;
