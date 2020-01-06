import React from 'react';
import { withFormik, Form as FormikForm, Field, FormikProps } from 'formik';
import * as yup from 'yup';

type FormValues = {
  title: string;
};
type Props = {} & FormikProps<FormValues>;

const Form: React.FC<Props> = (props) => {
  const { values, errors } = props;
  return (
    <FormikForm>
      <Field
        value={values.title}
        name="title"
      />
      <button type="submit">送信</button>
      {errors.title && <p className="error">{errors.title}</p>}
    </FormikForm>
  );
};

export default withFormik<{}, FormValues>({
  mapPropsToValues() {
    return {
      title: '',
    };
  },
  handleSubmit: (values) => {
    const { title } = values;
    console.log(`title: ${title}`);
  },
  validationSchema: yup.object().shape({
    title: yup.string().max(10, 'タイトルは10文字以内で入力してください').required('タイトルは必須項目です'),
  }),
})(Form);
