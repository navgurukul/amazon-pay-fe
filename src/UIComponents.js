import { Typography } from "@material-ui/core";
import React from "react";

const NAME = "Peepul";
const LOGO = "https://navgurukul.org/assets/img/peepul.png";
const HOME_PAGE = "https://www.peepulindia.org/";
const RETURN_URL = "https://donate.peepulschools.org/";
const BLOG = "https://twitter.com/peepulindia?lang=en";

function TEXTHEAD() {
  return (
    <Typography
      component="h4"
      variant="h4"
      className="Heading"
      className="text-align-center"
    >
      Donate for devices.
      <br />
      Make a difference.
    </Typography>
  );
}

function TEXT1() {
  return (
    <Typography component="p" variant="body1" className="text1">
      At Peepul, we look to improve learning outcomes in the public education
      system, by enabling ‘meaningful teacher-student interaction’. If a child
      is meaningfully and effectively engaged in the classroom by the teacher,
      she attends classes regularly, engages in learning, and in turn, achieves
      learning.
    </Typography>
  );
}

function TEXT2() {
  return (
    <Typography component="p" variant="body1" className="text1">
      Towards this, we closely partner with national, state, and local
      governments to design and implement high-quality, scalable solutions that
      create these high-performing teachers, through a combination of training,
      coaching and performance management.
    </Typography>
  );
}

export { NAME, LOGO, HOME_PAGE, RETURN_URL, BLOG, TEXT1, TEXT2, TEXTHEAD };
