import { default as k } from "../hooks/Okra";

import Link from "next/link";
import { Checkbox, Button, FormControlLabel, TextField } from "@mui/material";

import { GuestLayout } from "../components/layouts";
import {
  GuestHeadingSlot,
  GuestPasswordSlot,
  GuestNavSlot,
  OAuthSlot,
} from "../components/slots";

const CheckboxControl = (
  <Checkbox
    defaultChecked
    // checked={checked}
    // onChange={handleChange}
    inputProps={{ "aria-label": "controlled" }}
    size="small"
  />
);

export default function Login() {
  return (
    <GuestLayout>
      <GuestHeadingSlot />

      <form>
        <TextField
          type="search"
          label="Username"
          value="2gbeh"
          margin="normal"
          fullWidth
          required
        />

        <GuestPasswordSlot />

        <table border="0">
          <tr>
            <td>
              <FormControlLabel
                control={CheckboxControl}
                label="Remember me"
                 style={{ color: "#555" }}
              />
            </td>
            <td align="right">
              <Link
                href="/forgot-password"
                style={{
                  color: process.env.NEXT_PUBLIC_THEME_MAIN,
                  textDecoration: "none",
                }}
              >
                Forgot Password?
              </Link>
            </td>
          </tr>
        </table>

        <p></p>
        <Button variant="contained" size="large" fullWidth>
          Sign in
        </Button>
      </form>

      <GuestNavSlot />
      <OAuthSlot />
    </GuestLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { head: k.setPageTitle("Log in") },
  };
}
