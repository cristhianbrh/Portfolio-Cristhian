import { useEffect, useState } from "react";

const useVisible = ({ visorRef, setSectionCurrent }) => {
    const [visible, setVisible] = useState([visorRef, false]);
    useEffect(() => {
        const { current } = visorRef;


        const callbackFunction = (entries) => {
            const [entry] = entries;

            setVisible([visorRef, entry.isIntersecting]);

            if (entry.isIntersecting) {
                const idSection = visorRef.current.id;
                setSectionCurrent(parseInt(idSection[idSection.length-1]));
            }
        }
        const options = {
            root: null,
            threshold: 0.9
        }

        const observer = new IntersectionObserver(callbackFunction, options);

        if (current) observer.observe(current)
        return () => {
            if (current) observer.disconnect();
        }
    }, [visorRef])
    return { visible }
}
export default useVisible;