import React, { useState, useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../../contexts/Context";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const initialState = {
  name: "",
  class: "",
  dateofbirth: "",
  gender: true,
  image: "",
  feedback: "",
};

export const FormAdd = () => {
  const [newProductState, setNewProductState] = useState(initialState);
  const { handleAddNew } = useContext(Context);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: newProductState,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required!")
        .min(2, "Name must be 2 characters or more"),
      dateofbirth: Yup.string().required("dateofbirth is required!"),
      class: Yup.string()
        .required("class is required!")
        .min(5, "class must be 10 characters or more"),
      feedback: Yup.string(),
      image: Yup.string().required("Image is required!"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      await handleAddNew(values);
      setIsSubmitted(true);
    },
  });

  if (isSubmitted) {
    return <Navigate to="/dashboard" />; // Chuyển đến trang "/dashboard" sau khi thêm thành công
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update formik's values
    formik.handleChange(event);
    // Update newStaffState, bao gồm cả trường createdAt
    setNewProductState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "#cfe8fc",
            height: "115vh",
            borderRadius: "20px",
            marginTop: "20px",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              noWrap
              component="a"
              href="/"
              sx={{
                margin: "20px",
                fontFamily: "inherit",
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Add Student
            </Typography>
          </div>
          <div style={{ width: "full", textAlign: "center" }}>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <div>
                  <FormControlLabel
                    control={
                      <Switch
                        id="Gender"
                        name="gender"
                        checked={formik.values.gender}
                        onChange={formik.handleChange}
                      />
                    }
                    label="Gender"
                  />
                </div>

                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  name="name"
                  value={formik.values.name || ""}
                  onChange={handleInputChange}
                  error={formik.touched.name && formik.errors.name}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Class"
                  variant="outlined"
                  name="class"
                  multiline
                  rows={3}
                  value={formik.values.class || ""}
                  onChange={handleInputChange}
                  error={formik.touched.class && formik.errors.class}
                  helperText={formik.touched.class && formik.errors.class}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Date Of Birth"
                  variant="outlined"
                  name="dateofbirth"
                  value={formik.values.dateofbirth || ""}
                  onChange={handleInputChange}
                  error={
                    formik.touched.dateofbirth && formik.errors.dateofbirth
                  }
                  helperText={
                    formik.touched.dateofbirth && formik.errors.dateofbirth
                  }
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="Image"
                  variant="outlined"
                  name="image"
                  value={formik.values.image || ""}
                  onChange={handleInputChange}
                  error={formik.touched.image && formik.errors.image}
                  helperText={formik.touched.image && formik.errors.image}
                />
                <TextField
                  style={{ width: "500px", marginTop: "20px" }}
                  id="outlined-basic"
                  label="FeedBack"
                  variant="outlined"
                  name="feedback"
                  value={formik.values.feedback || ""}
                  onChange={handleInputChange}
                  error={formik.touched.feedback && formik.errors.feedback}
                  helperText={formik.touched.feedback && formik.errors.feedback}
                />

                <div style={{ marginTop: "20px" }}>
                  <Button type="submit" variant="contained">
                    Add New
                  </Button>
                </div>
              </FormControl>
            </form>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
};
