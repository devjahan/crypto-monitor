import Link from "next/link";
import { useRouter } from "next/router";

const Links = [
  { label: "Home", href: "/" },
  { label: "Trade Currency", href: "/tradeCoin" },
  { label: "Order Book", href: "/orderBook" },
];

const NavLink = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link href={href} passHref
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "0.25rem",
          textDecoration: "none",
            color: router.asPath === href ? "#FFAE00" : "white",
        }}
      >
        {children}
    </Link>
  );
};

const TabsLink = () => {
  return Links.map((link) => (
    <NavLink key={link.label} href={link.href}>
      {link.label}
    </NavLink>
  ));
};

export default TabsLink;
