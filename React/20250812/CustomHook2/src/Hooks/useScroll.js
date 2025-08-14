import { useState } from "react";

export function useScroll() {
    const [isBottom, setIsBottom] = useState();

    window.addEventListener("scroll", () => {});
}
