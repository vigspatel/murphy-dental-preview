// eslint-disable-next-line
import { useLocation } from '@reach/router';

export default function useLocationData() {
    const location = useLocation();
    const url = location.pathname.slice(1, -1).split('/');

    const replace = (text: string) => text.replaceAll('-', ' ').replaceAll('and', '&');

    const category = url.length >= 2 ? replace(url[0]) : '';
    const subCategory = url.length === 3 ? replace(url[1]) : '';
    const title =
        url.length === 1
            ? replace(url[0])
            : url.length === 2
            ? replace(url[1])
            : url.length === 3
            ? replace(url[2])
            : '';

    return { category, subCategory, title };
}
