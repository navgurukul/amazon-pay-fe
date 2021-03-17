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
    const { FullName, Email, Phone, PanNumber, address, Amount } = userDetails;
    const res = await axios.get(
      `/api/formEntry?name=${FullName}&email=${Email}&phone=${Phone}&pan=${PanNumber}&address=${address}&amount=${Amount}&orderId=${sellerOrderId}`
    );
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
    <Grid container  spacing={4}>
      <Grid item xs={12} md={12} >
        <TextField
          select
          label="Country"
          name="country"
          fullWidth
          variant="outlined"
          defaultValue={userDetails.country}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
        >
          {["India", "Other Country"].map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </TextField>
        {errors.country && <span style={{ color: "red" }} role="alert">{"This field is required"}</span>}
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
            fullWidth
            id="FullName"
            label="Full Name"
            defaultValue={userDetails.FullName}
            onChange={handleChange}
            inputRef={register({ required: true, maxLength: 80 })}
          />
          {errors.FullName && <span style={{ color: "red" }} role="alert">{"This field is required"}</span>}
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="EmailAddress"
            label="Email Address"
            name="Email"
            type="email"
            autoComplete="lname"
            defaultValue={userDetails.FullName}
            onChange={handleChange}
            inputRef={register({
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/
              }
            })}
          />
          {errors.Email && <span style={{ color: "red" }} role="alert">{"Invalid email address"}</span>}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
             variant="outlined"
            required
            fullWidth
            name="Phone"
            label="Phone Number"
            type="number"
            autoComplete="phoneNumber"
            defaultValue={userDetails.FullName}
            onChange={handleChange}
            inputRef={register({ valueAsNumber: true, required: true })}
          />
          {errors.Phone && <span style={{ color: "red" }} role="alert">{"Character should be Number"}</span>}
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            variant="outlined"
            required
            fullWidth
            inputProps={{ style: { textTransform: 'capitalize' } }}
            name="address"
            label="Address"
            type="address"
            autoComplete="address"
            defaultValue={userDetails.address}
            onChange={handleChange}
            inputRef={register({ required: true, maxLength: 80 })}
          />
          {errors.address && <span style={{ color: "red" }} role="alert">{"This field is required"}</span>}
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
            inputProps={{
              autoCapitalize: 'on',
            }}
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
          {errors.PanNumber && <span style={{ color: "red" }} role="alert">{"Incorrect PAN Details"}</span>}
        </Grid>
        <Grid item xs={12} md={6}>
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
          {errors.Amount && <span style={{ color: "red" }} role="alert">{"Character should be amount number"}</span>}
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
    <Container style={{ marginTop: "3%"}} component="main" maxWidth="sm">
      <CssBaseline />
      <div>
        {COUNTRY_FIELD}
        {FORM}
      </div>
    </Container>
  );
}
