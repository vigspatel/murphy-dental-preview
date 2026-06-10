// eslint-disable-next-line
import { useLocation } from '@reach/router';
import { useEffect } from 'react';

const useRouteChange = (close: (state: boolean) => void) => {
    const { pathname } = useLocation();

    useEffect(() => {
        return () => {
            close(false);
        };
    }, [pathname, close]);
};

export default useRouteChange;
