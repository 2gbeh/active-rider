import { default as h } from "../hooks/Okra";

import { useRouter } from "next/router";

import { BlankLayout } from "../components/layouts";
import { ErrorSlot } from "../components/slots";

export default function UnauthorizedAccess() {
  const router = useRouter();

  return (
    <BlankLayout>
      <ErrorSlot
        p={{
          title: "401",
          subtitle: "Unauthorized Access",
          article: `It appears you're not authorized to access the requested resource <br /> <b>${router.asPath}</b>`,
        }}
      />
    </BlankLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { head: h.setPageTitle("Unauthorized Access") },
  };
}
