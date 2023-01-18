import { default as h } from "../hooks/Okra";

import { Checkbox, Button, FormLabel, TextField } from "@mui/material";

import { GuestLayout } from "../components/layouts";
import {
  GuestHeadingSlot,
  GuestPasswordSlot,
  GuestNavSlot,
  OAuthSlot,
} from "../components/slots";

export default function Register() {
  return (
    <GuestLayout>
      <GuestHeadingSlot
        p={{
          title: "Create an account",
          subtitle: "Join Active-Rider for fast pick-up and delivery",
        }}
      />

      <form>
        <TextField
          type="search"
          label="Username"
          value="2gbeh"
          margin="normal"
          fullWidth
          required
        />
        {/* username must be at least 3 characters */}

        <TextField
          type="email"
          label="Email"
          margin="normal"
          fullWidth
          required
        />

        <GuestPasswordSlot />

        <FormLabel style={{ color: "#555", marginLeft: "-5px" }}>
          <Checkbox size="small" />I agree to &nbsp;
          <a
            href="#!"
            style={{
              color: process.env.NEXT_PUBLIC_THEME_MAIN,
              textDecoration: "none",
            }}
          >
            privacy policy &amp; terms
          </a>
        </FormLabel>

        <p></p>
        <Button variant="contained" size="large" fullWidth>
          Sign up
        </Button>
      </form>

      <GuestNavSlot
        p={{ label: "Already have an account?", text: "Log in", href: "/" }}
      />
      <OAuthSlot />
    </GuestLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { head: h.setPageTitle("Register") },
  };
}
