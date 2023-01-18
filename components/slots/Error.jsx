import { default as h } from "../../hooks/Okra";

import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

import styles from "../../styles/sass/Error.module.scss";

const Error = ({ p = { title: "Welcome back" } }) => {
  const router = useRouter();
  const [wx, hx] = [60, 60];

  return (
    <div className={styles["error"]}>
      <h1>{p.title}</h1>
      <p>{p.subtitle}</p>
      <article>{h.asHtml(p.article)}</article>

      <Button
        variant="contained"
        onClick={() => {
          router.back();
        }}
      >
        Go back
      </Button>

      <figure>
        <Image src="/images/jeff.gif" alt="" width={wx} height={hx} />
      </figure>
    </div>
  );
};

export default Error;
