import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { SocialIcon } from "react-social-icons";
import Box from "@material-ui/core/Box";

export default function Footer() {
  return (
    <div className="Footer">
      <Box display="flex" justifyContent="center">
        <Box p={2}>
          <SocialIcon url="https://x.facebook.com/navgurukul/" />
        </Box>
        <Box p={2}>
          <SocialIcon url="https://www.instagram.com/navgurukul.bangalore/?hl" />
        </Box>
        <Box p={2}>
          <SocialIcon url="https://www.youtube.com/channel/UC9yaihhuBLgke9O6IVC-Gsw" />
        </Box>
      </Box>
    </div>
  );
}
