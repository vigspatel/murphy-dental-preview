import { useEffect, useLayoutEffect, useState } from 'react';

type ReturnType = [boolean, (locked: boolean) => void];

function useScrollBlock(initialLocked = false): ReturnType {
    const [locked, setLocked] = useState(initialLocked);
    // Do the side effect before render
    useLayoutEffect(() => {
        if (!locked) {
            return;
        }

        const html = document.documentElement;
        const body = document.body;

        // Save initial html and body style
        const originalHtmlOverflow = html.style.overflow;
        const originalBodyOverflow = body.style.overflow;
        const originalHtmlPosition = html.style.position;
        const originalBodyPosition = body.style.position;
        const originalMarginRight = body.style.marginRight;

        // Get the scrollBar width and margin
        const scrollBarWidth = window.innerWidth - html.clientWidth;
        const bodyMarginRight =
            parseInt(window.getComputedStyle(body).getPropertyValue('margin-right')) || 0;

        // Lock html scroll
        html.style.overflow = 'hidden';
        html.style.position = 'relative';
        body.style.overflow = 'hidden';
        body.style.position = 'relative';
        body.style.marginRight = `${bodyMarginRight + scrollBarWidth}px`;

        return () => {
            html.style.overflow = originalHtmlOverflow;
            body.style.overflow = originalBodyOverflow;
            html.style.position = originalHtmlPosition;
            body.style.position = originalBodyPosition;
            body.style.marginRight = originalMarginRight;
        };
    }, [locked]);

    // Update state if initialValue changes
    useEffect(() => {
        if (locked !== initialLocked) {
            setLocked(initialLocked);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialLocked]);

    return [locked, setLocked];
}

export default useScrollBlock;
