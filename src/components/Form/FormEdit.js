import React, { useContext, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { Context } from "../../contexts/Context";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useFormik } from "formik";
import * as Yup from "yup";
import { style } from "../Settings/Styles";

export default function FormEdit({ staffId, handleClose }) {
  const [singleStaff, setSingleStaff] = useState({});
  const open = Boolean(staffId);
  const { products, FormatDate, handleUpdate } = useContext(Context);

  useEffect(() => {
    const findStaffById = (id) => {
      return products.find((staff) => staff.id === id);
    };

    if (staffId) {
      const foundStaff = findStaffById(staffId);
      setSingleStaff(foundStaff);
    }
  }, [staffId, products, FormatDate]);

  const formik = useFormik({
    initialValues: singleStaff,
    enableReinitialize: true, // Thêm thuộc tính enableReinitialize để cập nhật lại giá trị khi initialValues thay đổi
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
      await handleUpdate(staffId, values);
      handleClose();
    },
  });

  const handleInputChange = (event) => {
    formik.handleChange(event);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style}>
            <form
              style={{ textAlign: "center" }}
              onSubmit={formik.handleSubmit}
            >
              <Typography
                style={{ marginTop: "250px" }}
                variant="h3"
                id="modal-title"
              >
                News Details
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={formik.values.image}
                  alt="Img"
                  style={{
                    width: "50%",
                    height: "100%",
                    borderRadius: "30px",
                  }}
                />
              </div>
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
                error={formik.touched.dateofbirth && formik.errors.dateofbirth}
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
              <Container
                maxWidth="lg"
                style={{
                  margin: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button type="submit" variant="contained">
                  Update
                </Button>
              </Container>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
