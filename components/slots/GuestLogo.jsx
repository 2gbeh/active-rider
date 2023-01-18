import Image from "next/image";

const GuestLogo = ({ variant = "contained" }) => {
  const [wx, hx] = [60, 60];

  return (
    <figure>
      {variant === "contained" ? (
        <Image src="/images/logo-w.png" alt="" width={wx} height={hx} />
      ) : (
        <Image src="/images/logo.png" alt="" width={wx} height={hx} />
      )}
    </figure>
  );
};
export default GuestLogo;