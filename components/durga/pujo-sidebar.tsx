// "use client";

// type SidebarItem = {
//   label: string;
//   href: string;
//   active?: boolean;
// };

// export function PujoSidebar({ items }: { items: SidebarItem[] }) {
//   return (
//     <aside className="md:sticky md:top-24 mt-20 h-[calc(100vh-6rem)] overflow-y-auto">
//       <nav aria-label="Festival navigation">
//         <ul className="flex flex-row gap-2 overflow-x-auto md:flex-col md:gap-4 md:pb-8">
//           {items.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 aria-current={item.active ? "page" : undefined}
//                 className={[
//                   " text-base font-light transition-colors",
//                   item.active
//                     ? "font-semibold"
//                     : "border-transparent text-[color:var(--brand-text)] opacity-75 hover:opacity-100",
//                 ].join(" ")}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// }

/////////////////////////////////////////////////

"use client";

type SidebarItem = {
  label: string;
  href: string;
  active?: boolean;
};

export function PujoSidebar({ items }: { items: SidebarItem[] }) {
  return (
    <aside className="hidden md:sticky md:top-24 md:mt-20 md:h-[calc(100vh-6rem)] md:overflow-y-auto md:block">
      <nav aria-label="Festival navigation">
        <ul className="flex flex-col gap-4 pb-8">
          {items.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className={[
                  "text-base font-light transition-colors",
                  item.active
                    ? "font-semibold"
                    : "border-transparent text-[color:var(--brand-text)] opacity-75 hover:opacity-100",
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
