import './App.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

function App() {

  const yupSchema = Yup.object().shape({
    name: Yup.string().min(2, 'To short').max(20, 'To long').required('Enter name'),
    email: Yup.string().email('Invalid email').required('Enter Email'),
    password: Yup.string().min(5, 'To short').max(20, 'To long').required('Enter Password')
  });



  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={yupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);

        }} >
        {({ errors, touched }) => (
          <Form autoComplete='off' className='app_form' >
            <h3>Signup</h3>

            <Field type="text" name="name" id="name" placeholder='Name' style={{border: errors.name && touched.name ? '1px solid red': '1px solid gray'}}/>
            {errors.name && touched.name ? (
              <div style={{color:'red'}}>{errors.name}</div>
            ) : null}

            <Field type="email" name="email" id="email" placeholder='email' style={{border:errors.email && touched.email ? '1px solid red' : '1px solid gray'}}/>
            {errors.email && touched.email ? (
              <div style={{color:'red'}} >{errors.email}</div>
            ) : null}

            <Field type="password" name="password" id="password" placeholder='password' style={{border:errors.password && touched.password ? '1px solid red' : '1px solid gray'}}  />
            {errors.password && touched.password ? (
              <div style={{color:'red'}}>{errors.password}</div>
            ) : null}


            <div className='btn_form'>
              <input type="submit" name="submit" id="submit" />

            </div>
          </Form>

        )}

      </Formik>

    </div>
  );
}

export default App;
