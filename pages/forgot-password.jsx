import { default as h } from "../hooks/Okra";

import { Button, TextField } from "@mui/material";

import { GuestLayout } from "../components/layouts";
import { GuestHeadingSlot, GuestNavSlot } from "../components/slots";

export default function ForgotPassword() {
  return (
    <GuestLayout>
      <GuestHeadingSlot
        p={{
          title: "Forgot your password?",
          subtitle:
            "Enter email address linked to your account to get the password reset link",
        }}
      />

      <form>
        <TextField
          type="email"
          label="Email Address"
          margin="normal"
          fullWidth
          required
        />

        <p></p>
        <Button variant="contained" size="large" fullWidth>
          Send link
        </Button>
      </form>

      <GuestNavSlot
        p={{
          label: "",
          text: "Go back",
          href: "/",
          icon: "fas fa-chevron-left",
        }}
      />
    </GuestLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { head: h.setPageTitle("Forgot Password") },
  };
}
