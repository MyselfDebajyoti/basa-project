"use client";

type SidebarItem = {
  label: string;
  href: string;
  active?: boolean;
};

type PujoSidebarProps = {
  items: SidebarItem[];
  onItemClick?: (href: string) => void;
};

export function PujoSidebar({ items, onItemClick }: PujoSidebarProps) {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault(); // Prevent default anchor behavior
    onItemClick?.(href);
  };

  return (
    <aside className="hidden md:sticky md:top-24 md:mt-20 pt-10 md:h-[calc(100vh-6rem)] md:overflow-y-auto md:block">
      <nav aria-label="Festival navigation">
        <ul className="flex flex-col gap-4 pb-8">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                aria-current={item.active ? "page" : undefined}
                className={[
                  "text-base font-light transition-colors cursor-pointer",
                  item.active
                    ? "font-semibold text-[color:var(--brand-primary)]"
                    : "border-transparent text-[color:var(--brand-text)] opacity-75 hover:opacity-100 hover:text-[color:var(--brand-accent)]",
                ].join(" ")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
