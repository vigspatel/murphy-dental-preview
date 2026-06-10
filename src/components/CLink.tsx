import type { GatsbyLinkProps } from 'gatsby';
import { Link as GatsbyLink } from 'gatsby';

const isExternalLink = (path: string) =>
    path?.startsWith(`http://`) ||
    path?.startsWith(`https://`) ||
    path?.startsWith(`//`) ||
    path?.startsWith(`www`) ||
    path?.endsWith(`.pdf`);

const isInternalLink = (path: string) => path?.startsWith(`/`) && !path?.includes('.');

export default function CLink<TState>({
    children,
    ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState>>) {
    if (isExternalLink(props.to)) {
        return (
            <a {...props} href={props.to} rel="noopener noreferrer" target="_blank">
                {children}
            </a>
        );
    }

    if (isInternalLink(props.to)) {
        return <GatsbyLink<TState> {...props}>{children}</GatsbyLink>;
    }

    return (
        <a {...props} href={props.to}>
            {children}
        </a>
    );
}
