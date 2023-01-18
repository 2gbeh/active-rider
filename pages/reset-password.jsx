import { default as h } from "../hooks/Okra";

import { Button } from "@mui/material";

import { BlankLayout } from "../components/layouts";
import {
  GuestLogoSlot,
  GuestHeadingSlot,
  GuestPasswordSlot,
  GuestNavSlot,
} from "../components/slots";

import styles from "../styles/sass/ResetPassword.module.scss";

export default function ResetPassword() {
  return (
    <BlankLayout>
      <div className={styles["reset-password"]}>
        <GuestLogoSlot variant="outlined" />

        <GuestHeadingSlot
          p={{
            title: "Reset password",
            subtitle: "Enter a new password not less than 8 characters long",
          }}
        />

        <form>
          <GuestPasswordSlot p={{ label: "New Password" }} />

          <GuestPasswordSlot p={{ label: "Confirm Password" }} />

          <p></p>
          <Button variant="contained" size="large" fullWidth>
            Change Password
          </Button>
        </form>

        <GuestNavSlot
          p={{
            label: "",
            text: "Back to Login",
            href: "/",
            icon: "fas fa-chevron-left",
          }}
        />
      </div>
    </BlankLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: { head: h.setPageTitle("Reset Password") },
  };
}
