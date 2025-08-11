import React, { useState, useEffect, useRef } from "react";

const FunctionalComp = () => {
    const [number, setNumber] = useState(0);
    const isFirstRender = useRef(true);
    const isMounted = useRef(false);

    if (!isMounted.current) {
        console.log("componentWillMount");
    }

    if (isMounted.current) {
        console.log("shouldComponentUpdate");
        console.log("componentWillUpdate");
    }

    useEffect(() => {
        console.log("componentDidMount");
        isMounted.current = true;

        return () => {
            console.log("componentWillUnmount");
        };
    }, []);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        console.log("componentDidUpdate ");
    }, [number]);

    function handleClick() {
        setNumber(number + 1);
    }

    function resetClick() {
        setNumber(0);
    }
    console.log("render");
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <button onClick={resetClick}>Reset</button>
            <span>{number}</span>
        </div>
    );
};

export default FunctionalComp;
