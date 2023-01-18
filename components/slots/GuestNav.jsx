import Link from "next/link";

const GuestNav = ({
  p = {
    label: "Don't have an account?",
    text: "Register",
    href: "/register",
  },
}) => {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ color: "#555" }}>{p.label}</span> &nbsp;
      <Link
        href={p.href}
        style={{
          color: process.env.NEXT_PUBLIC_THEME_MAIN,
          textDecoration: "none",
        }}
      >
        {p.icon && <i className={p.icon} style={{ marginRight: "10px" }}></i>}
        {p.text}
      </Link>
    </div>
  );
};
export default GuestNav;