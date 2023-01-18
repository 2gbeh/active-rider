import { Typography } from "@mui/material";

const GuestHeading = ({ p = { title: "Welcome back" } }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {p.title}
      </Typography>

      <Typography variant="subtitle2" style={{ color: "#999" }} gutterBottom>
        {p.subtitle ?? "Sign in to continue"}
      </Typography>
    </>
  );
};

export default GuestHeading;