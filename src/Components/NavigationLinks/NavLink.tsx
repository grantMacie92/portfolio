function NavLink({
                     href,
                     label,
                     active,
                 }: {
    href: string;
    label: string;
    active: boolean;
}) {
    return (
        <a
            href={href}
            aria-current={active ? "true" : undefined}
            className={`navLink ${active ? "isActive" : ""}`}
        >
            <span className="navIndicator" aria-hidden="true" />
            <span className="navLabel">{label}</span>
        </a>
    );
}

export default NavLink;