const links = [
  { label: "Web development", href: "/#web-development" },
  // { label: "Website Services", href: "/#case-studies" },
  // -> sublinks:whats included, packages
  { label: "Writing Skills", href: "/#writing" },
  // { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/#contact" },
];

const TestMenuItems = () => {
  return (
    <ul class="bg- h-[70%] flex 2xl:flex-row flex-col 2xl:justify-end justify-start 2xl:items-end items-start">
      {links.map((link) => (
        <li class="text-xl  opacity-90 hover:opacity-100 drop-shadow-2xl">
          <a class="mx-5" href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TestMenuItems;
