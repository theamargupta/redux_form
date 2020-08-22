import React from 'react';
import { Styles } from '../../Utils/Style';
import { Formik, Form } from 'formik';
import CustomCheckBox from '../../components/CustomCheckBox';
import CustomSelect from '../../components/CustomSelect';
import CustomTextInput from '../../components/CustomTextInput';
import * as Yup from 'yup';

const Home = () => {
  return (
    <Styles>
      <Formik
        initialValues={{
          name: '',
          email: '',
          acceptedTerms: false,
          specialPower: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 character')
            .max(15, 'Less than 15 charcters')
            .required('Required'),
          email: Yup.string().email('Invalid Email').required('Required'),
          acceptedTerms: Yup.boolean()
            .oneOf([true], 'You must accept the terms and condition')
            .required('Required'),
          specialPower: Yup.string()
            .oneOf(
              ['flight', 'invisiblity', 'waealty Fat Guy', 'other'],
              'Invalid special powes'
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000);
        }}
      >
        {(props) => (
          <Form>
            <h1>Signup Form</h1>

            <CustomTextInput
              label='Name'
              name='name'
              type='text'
              placeholder='Amar'
            />
            <CustomTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='theamargupta.tech@gmail.com'
            />
            <CustomSelect label='Special power' name='specialPower'>
              {['flight', 'invisiblity', 'waealty Fat Guy', 'other'].map(
                (data) => (
                  <option key={data} value={`${data}`}>
                    {data}
                  </option>
                )
              )}
            </CustomSelect>
            <CustomCheckBox name='acceptedTerms'>
              I accept he terms and condition
            </CustomCheckBox>
            <button type='submit'>
              {props.isSubmitting ? 'loading...' : 'submit'}
            </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
};

export default Home;
