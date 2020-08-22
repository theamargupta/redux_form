import React, { Fragment } from 'react';
import { useField } from 'formik';

const CustomCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props, 'checkbox');
  return (
    <Fragment>
      <label className='checkbox'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </Fragment>
  );
};

export default CustomCheckBox;
