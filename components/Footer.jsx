import { dt } from "../hooks/f";

import styled from "@emotion/styled";

const Footer = ({ props }) => {
  const tooltip = dt.teller(process.env.NEXT_PUBLIC_CREATED);
  return (
    <Template>
      &copy; 2022 {process.env.NEXT_PUBLIC_APP_NAME} &reg;
      <div class="version">
        .::Build
        <time title={tooltip}>{process.env.NEXT_PUBLIC_BUILD}</time>
      </div>
    </Template>
  );
};

export default Footer;

const Template = styled.footer`
  background-color: #e11;
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  dis
`;
