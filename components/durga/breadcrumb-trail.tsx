"use client";

type BreadcrumbItem = {
  label: string;
  href?: string;
  current?: boolean;
};

export function BreadcrumbTrail({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm font-light text-[color:var(--brand-text)] opacity-80">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="transition-colors hover:text-[color:var(--brand-primary)]"
                >
                  {item.label}
                </a>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={
                    isLast ? "text-[color:var(--brand-primary)]" : undefined
                  }
                >
                  {item.label}
                </span>
              )}
              {!isLast ? <span aria-hidden="true">{"/"}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
