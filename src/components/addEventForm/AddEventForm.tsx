import React, { useEffect } from 'react';
import { Title } from '../Title';
import { withFormik, FormikProps, Form, Field } from 'formik';
import * as Yup from 'yup';
import { EventItem } from '../../shared/types';
import 'date-fns';
import {
  Typography,
  Container,
  CssBaseline,
  Grid,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Button,
  InputLabel,
} from '@material-ui/core';
import { useStyles } from './style';

interface OtherProps {
  title?: string;
  image?: string;
  date?: string;
  time?: string;
  description?: string;
  eventType?: string;
  phone?: number;
  email?: string;
  place?: string;
  onAddEventProcess?: any;
}

interface MyFormProps {
  initialTitle?: string;
  initialImage?: string;
  initialDate?: string;
  initialTime?: string;
  initialDescription?: string;
  initialEventType?: string;
  initialPhone?: string;
  initialEmail?: string;
  initialPlace?: string;
  onAddEvent?: any;
  onAddEventProcess?: any;
}

// listening change on input fields
const InnerForm = (props: OtherProps & FormikProps<EventItem>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    onAddEventProcess,
  } = props;

  const classes = useStyles();
  
  useEffect( () => {
    onAddEventProcess(values);
  })

  return (
    // form
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <Title>Add event form</Title>
      <Typography component="h1" variant="h5"></Typography>
      <Form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Field
              component={TextField}
              variant="outlined"
              fullWidth
              name="title"
              id="title"
              type="title"
              label="Title"
              placeholder="Please enter title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              error={touched.title && Boolean(errors.title)}
              helperText={touched.title && errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              name="date"
              id="date"
              label="Event`s Date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              type="date"
              placeholder="Please choose event date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
              error={touched.date && Boolean(errors.date)}
              helperText={touched.date && errors.date}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              fullWidth
              name="time"
              id="time"
              type="Time"
              label="time"
              InputLabelProps={{ shrink: true }}
              placeholder="Please choose event start hours"
              helpertext="Please choose event start hours"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
              error={touched.time && Boolean(errors.time)}
              helperText={touched.time && errors.time}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={TextField}
              variant="outlined"
              fullWidth
              name="image"
              id="image"
              type="text"
              label="Image"
              placeholder="Please enter image URL."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
              error={touched.image && Boolean(errors.image)}
              helperText={touched.image && errors.image}
            />
          </Grid>
          <Grid item xs={12}>
            <Field component={FormControl} fullWidth id="eventType">
              <Field
                component={InputLabel}
                id="eventType"
                className={classes.inputlabel}
              >
                Event Type
              </Field>
              <Select
                labelId="eventType"
                label="Event Type"
                id="eventType"
                name="eventType"
                variant="outlined"
                autoWidth
                value={values.eventType}
                onChange={handleChange}
              >
                <MenuItem value="sport">Sport</MenuItem>
                <MenuItem value="culture">Culture</MenuItem>
                <MenuItem value="health">Health</MenuItem>
              </Select>
            </Field>
          </Grid>
          <Grid item xs={12}>
            <Field
              component={TextField}
              variant="outlined"
              fullWidth
              name="description"
              id="description"
              type="description"
              label="Description"
              placeholder="Please enter description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              component={TextField}
              variant="outlined"
              fullWidth
              name="place"
              id="place"
              type="text"
              label="Place"
              placeholder="Please enter event place"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.place}
              error={touched.place && Boolean(errors.place)}
              helperText={touched.place && errors.place}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              name="phone"
              id="phone"
              label="Contact number"
              variant="outlined"
              type="phone"
              placeholder="Please enter contact number to event organizator"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              component={TextField}
              variant="outlined"
              fullWidth
              name="email"
              id="email"
              type="email"
              label="email"
              placeholder="Please enter contact email to event organizator"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
        </Grid>

        {/* submit button disabled when required inputs are missing*/}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={
            isSubmitting ||
            !!(errors.title && touched.title) ||
            !!(errors.date && touched.date) ||
            !!(errors.time && touched.time)
          }
        >
          Save event
        </Button>

        {/* clear form on user demands*/}
        <Button
          type="button"
          onClick={() => props.resetForm()}
          fullWidth
          variant="contained"
          color="primary"
        >
          Clear form
        </Button>
      </Form>
    </Container>
  );
};

export const AddEventForm = withFormik<MyFormProps, EventItem>({
  mapPropsToValues: (props) => ({
    title: props.initialTitle || '',
    image: props.initialImage || '',
    date: props.initialDate || '',
    time: props.initialTime || '',
    eventType: props.initialEventType || '',
    description: props.initialDescription || '',
    phone: props.initialPhone || '',
    email: props.initialEmail || '',
    place: props.initialPlace || '',
  }),

  // validation with Yup
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(3, 'Title must contain at least 3 characters')
      .required('Title is required'),
    image: Yup.string().min(5, 'URL image must contain at 5 characters'),
    date: Yup.string().required('Event Date is required'),
    time: Yup.string().required('Event start time is required'),
    description: Yup.string()
      .min(
        5,
        'Description must contain at least 5 characters, and not more than 500'
      )
      .max(
        500,
        'Description must contain at least 5 characters, and not more than 500'
      ),
    phone: Yup.string().min(8, 'Phone number must contain at least 9 numbers'),
    email: Yup.string().email('Valid email must contain @ and dot'),
    place: Yup.string()
      .min(
        2,
        'Event place must contain at least 2 characters, and not more than 150'
      )
      .max(
        150,
        'Description must contain at least 2 characters, and not more than 150'
      ),
  }),

  handleSubmit(
    { title, image, date, time, eventType, phone, email, place }: EventItem,
    { props, setSubmitting, setErrors }
  ) {
    // POST inputs data to endpoint /add
    fetch('http://localhost:9000/add', {
      method: 'POST',
      body: JSON.stringify({
        title,
        image,
        date,
        time,
        eventType,
        phone,
        email,
        place,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        props.onAddEvent(json);
      });

    // feedback for user
    alert('Events has been added. Create new events or check our events list');
  },
})(InnerForm);
