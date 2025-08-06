import Image from "../card/image.jsx";
import Heading from "../card/heading";
import Text from "../card/text";
import Button from "../card/button";

function Main() {
    return (
        <main className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg  flex flex-col p-3 rounded-md max-w-sm">
                <Image src="https://picsum.photos/200/200" alt="Placeholder Image" />
                <Heading title="라이캣의 Tailwind 노하우 책" />
                <Text content="Tailwind CSS를 사용하여 만든 간단한 카드 구성 요소입니다. 이미지,제목 및 설명이 포함 되어있습니다." />
                <Text content="가격 : 1000원" />
                <Text content="재고 : 10개" />
                <Button label="지금 바로 구매하기!" />
            </div>
        </main>
    );
}
export default Main;
