import React, { useState } from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import * as Yup from 'yup';
import { EventItem } from '../views/EventItem';
import 'date-fns';

import {
  Typography,
  Container,
  Theme,
  createStyles,
  CssBaseline,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from '@material-ui/core';

import makeStyles from '@material-ui/core/styles/makeStyles';

interface FormValues {
  title: string;
}

interface OtherProps {
  title?: string;
  image?: string;
  date?: string;
  time?: number | string;
  description?: string;
  eventType?: string;
  phone?: number;
  email?: string;
  place?: string;
}

interface MyFormProps {
  initialTitle?: string;
  initialImage?: string;
  initialDate?: string;
  initialTime?: number | string;
  initialDescription?: string;
  initialEventType?: string;
  initialPhone?: number;
  initialEmail?: string;
  initialPlace?: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(5),
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(5),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);

const InnerForm = (props: OtherProps & FormikProps<EventItem>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    // title,
    // image,
    // date,
    // time,
    // description,
    // type,
    // phone,
    // email,
    // place,
  } = props;

  // const [typeEvent, setTypeEvent] = useState<string | null>('');
  // const handleChangeType = (
  //   event: React.ChangeEvent<{ value: 'sport' | 'culture' | 'helth' }>
  // ) => {
  //   setTypeEvent(event.target.value);
  // };
  const classes = useStyles();
  return (
    // <div>
    //   <form onSubmit={formik.handleSubmit}>
    //     <TextField
    //       fullWidth
    //       id="email"
    //       name="email"
    //       label="Email"
    //       value={formik.values.email}
    //       onChange={formik.handleChange}
    //       error={formik.touched.email && Boolean(formik.errors.email)}
    //       helperText={formik.touched.email && formik.errors.email}
    //     />
    //     <TextField
    //       fullWidth
    //       id="password"
    //       name="password"
    //       label="Password"
    //       type="password"
    //       value={formik.values.password}
    //       onChange={formik.handleChange}
    //       error={formik.touched.password && Boolean(formik.errors.password)}
    //       helperText={formik.touched.password && formik.errors.password}
    //     />
    //     <Button color="primary" variant="contained" fullWidth type="submit">
    //       Submit
    //     </Button>
    //   </form>
    // </div>

    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Add event form
      </Typography>
      <Form onSubmit={handleSubmit} className={classes.form}>
        {/* <Form> */}
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
              placeholder="Please choose event start hours"
              helpertext="Please choose event start hours"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.time}
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
            <Field
              component={FormControl}
              variant="outlined"
              fullWidth
              type="text"
              name="type"
              id="type"
              label="Select event type"
              select="true"
              onChange={handleChange}
              // onChange={handleChangeType}
              inputprops={{ name: 'type', id: 'type' }}
              // onBlur={handleBlur}
              value={
                values.eventType || values.sport || values.health || values.culture
              }
              // value={typeEvent}
              // error={touched.type && Boolean(errors.type)}
              // helperText={touched.type && errors.type}
              // multiple={true}
            >
              {/* {ranges.map((option: any) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>))} */}
                     {/* <FormControl>
              <InputLabel shrink={true} htmlFor="type">
                Event type
              </InputLabel>
              <Field
                component={onselect}
                type="text"
                name="type"
                multiple={true}
                inputprops={{name: 'type', id: 'type'}}
              >
                <MenuItem value="sport">Sport</MenuItem>
                <MenuItem value="culture">culture</MenuItem>
                <MenuItem value="health">Health</MenuItem>
              </Field>
            </FormControl> */}
        {/* </Form> */}
              <Select>
                <MenuItem value={values.sport}>Sport</MenuItem>
                <MenuItem value={values.culture}>Culture</MenuItem>
                <MenuItem value={values.health}>Health</MenuItem>
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
              helpertext="Please choose event start hours"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>

        </Grid>
   

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={
            isSubmitting ||
            !!(errors.title && touched.title) ||
            !!(errors.description && touched.date)
          }
        >
          Add event
        </Button>
      </Form>
    </Container>
  );
};

export const AddEventForm = withFormik<MyFormProps, EventItem>({
  mapPropsToValues: (props) => ({
    title: props.initialTitle || '',
    image: props.initialImage || '',
    date: props.initialDate || '2020-12-24',
    time: props.initialTime || '09:00:00',
    eventType: props.initialEventType || '',
    description: props.initialDescription || '',
    phone: props.initialPhone,
    email: props.initialEmail || '',
    place: props.initialPlace || '',
  }),
  // validation
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(3, 'Title must contain at least 3 characters')
      .required('Title is required'),
      image: Yup.string()
      .min(5, 'URL image must contain at 5 characters'),
    date: Yup.string(),
    time: Yup.string(),
    description: Yup.string().min(5,"Description must contain at least 5 characters, and not more than 500").max(500,"Description must contain at least 5 characters, and not more than 500" ),
    phone: Yup.string().min(8, "Phone number must contain at least 9 numbers"),
    email: Yup.string().email("Valid email must contain @ and dot"),
    place: Yup.string().min(2,"Event place must contain at least 2 characters, and not more than 150").max(150,"Description must contain at least 2 characters, and not more than 150" )   
  }),

  handleSubmit(
    { title, image, date, time, eventType, sport, culture, health, phone, email, place }: EventItem,
    { props, setSubmitting, setErrors }
  ) {
    const newEventItem = {
      title,
      image,
      date,
      time,
      eventType,
      phone,
      email,
      place

    };
    // console.log(title, date);
    console.log(newEventItem);
    alert(JSON.stringify(newEventItem, null, 2));
    //    actions.setSubmitting(false);
  },
})(InnerForm);
