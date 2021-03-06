import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import axios from "axios";
import { NAME } from "../UIComponents";

const useStyles = makeStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    display: "flex",
    // backgroundColor:'red',
    flexDirection: "column",
    alignItems: "center",
    padding: "8%",
    boxShadow: "rgba(0, 0, 0, 0.12) 0 0 25px",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  // console.log(errors);

  const [userDetails, setUserDetails] = useState({
    FullName: "",
    Email: "",
    Phone: "",
    address: "",
    PanNumber: "",
    Amount: 999,
    country: "India",
  });

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const onSubmit = async () => {
    let random = new Date().toISOString();
    random = random.replace(/-/g, "");
    random = random.replace(/:/g, "");
    random = random.replace(/\./g, "");
    random = random.replace(/[A-Z]/g, "");
    const sellerOrderId = random;
    const INR = "INR";
    const response = await axios.get(
      `/api/pay?sellerOrderId=${sellerOrderId}&orderTotalAmount=${userDetails.Amount}&orderTotalCurrencyCode=${INR}&transactionTimeout=900`
    );

    try {
      const {
        FullName,
        Email,
        Phone,
        PanNumber,
        address,
        Amount,
      } = userDetails;
      const res = await axios.get(
        `/api/formEntry?name=${FullName}&email=${Email}&phone=${Phone}&pan=${PanNumber}&address=${address}&amount=${Amount}&orderId=${sellerOrderId}`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }

    window.location.assign(response.data);

    // axios
    //   .get(
    //     `/api/pay?sellerOrderId=${sellerOrderId}&orderTotalAmount=${userDetails.Amount}&orderTotalCurrencyCode=${INR}&transactionTimeout=900`
    //   )
    //   .then(async (res) => {
    //     window.location.assign(res.data);
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err, "error");
    //   });
  };

  let COUNTRY_FIELD = (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12} lg={12}>
        <TextField
          name="country"
          variant="outlined"
          requiredmd={6}
          fullWidth
          id="country"
          label="Country"
          defaultValue={userDetails.country}
          onChange={handleChange}
          inputRef={register({ required: true })}
        />
        <div style={{ color: "red" }}>
          {errors.country && <p>This field is required</p>}
        </div>
      </Grid>
    </Grid>
  );

  if (NAME === "Peepul") {
    COUNTRY_FIELD = null;
  }

  let FORM = (
    <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <TextField
            autoFocus
            autoComplete="fname"
            name="FullName"
            variant="outlined"
            requiredmd={6}
            fullWidth
            id="FullName"
            label="Full Name"
            defaultValue={userDetails.FullName}
            onChange={handleChange}
            inputRef={register({ required: true, maxLength: 80 })}
          />
          <div style={{ color: "red" }}>
            {errors.FullName && <p>This field is required</p>}
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="EmailAddress"
            label="Email Address"
            name="Email"
            autoComplete="lname"
            defaultValue={userDetails.FullName}
            onChange={handleChange}
            inputRef={register({
              required: true,
              pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
            })}
          />
          <div style={{ color: "red" }}>
            {errors.Email && "Invalid email address"}
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            // pattern="^\d{4}-\d{3}-\d{4}$"
            required
            name="Phone"
            label="Phone Number"
            type="number"
            autoComplete="phoneNumber"
            defaultValue={userDetails.FullName}
            onChange={handleChange}
            // inputRef={register({ trnsformValue: (value) => parseFloat(value)})}
            inputRef={register({ valueAsNumber: true, required: true })}
          />
          <div style={{ color: "red" }}>
            {errors.Phone && <p>Character should be Number</p>}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="address"
            autoComplete="address"
            defaultValue={userDetails.address}
            onChange={handleChange}
            inputRef={register({ required: true, maxLength: 80 })}
          />
          <div style={{ color: "red" }}>
            {errors.address && <p>This field is required</p>}
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            autoComplete="fname"
            name="PanNumber"
            variant="outlined"
            required
            fullWidth
            id="PanNumber"
            label="Pan Number"
            defaultValue={userDetails.PanNumber}
            onChange={handleChange}
            type="text"
            inputRef={register({
              required: true,
              minLength: 6,
              maxLength: 10,
              pattern: /[A-Z]{5}[0-9]{4}[A-Z]{1}/g,
            })}
          />
          <div style={{ color: "red" }}>
            {errors.PanNumber && <p>Incorrect PAN Details</p>}
          </div>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <TextField
            autoComplete="fname"
            name="Amount"
            variant="outlined"
            required
            fullWidth
            id="Amount"
            label="Amount"
            defaultValue={userDetails.Amount}
            onChange={handleChange}
            type="number"
            inputRef={register({
              required: true,
              minLength: 1,
              maxLength: 12,
            })}
          />

          <div style={{ color: "red" }}>
            {errors.Amount && <p>Character should be amount number</p>}
          </div>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        DONATE WITH AMAZON PAY
      </Button>
    </form>
  );
  if (userDetails.country.toLowerCase().trim() !== "india")
    FORM = (
      <div style={{ padding: "15px" }}>
        <Typography>
          Sorry! We currently do not accept donations outside India
        </Typography>
      </div>
    );
  return (
    <Container style={{ marginTop: "3%" }} component="main" maxWidth="md">
      <CssBaseline />
      <div>
        {COUNTRY_FIELD}
        {FORM}
      </div>
    </Container>
  );
}
