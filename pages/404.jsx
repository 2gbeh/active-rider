import { default as h } from "../hooks/Okra";

import { useRouter } from "next/router";

import { BlankLayout } from "../components/layouts";
import { ErrorSlot } from "../components/slots";

export default function PageNotFound() {
  const router = useRouter();

  return (
    <BlankLayout>
      <ErrorSlot
        p={{
          title: "404",
          subtitle: "Page Not Found",
          article: `It appears the requested resource <b>${router.asPath}</b><br />does not exist or has been moved permanently.`,
        }}
      />
    </BlankLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { head: h.setPageTitle("Page Not Found") },
  };
}
