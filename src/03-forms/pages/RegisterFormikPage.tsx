
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import * as Yup from 'yup';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
       <h1>Register Formik Page</h1> 

      <Formik
        initialValues={{
         name: '',
         email: '',
         password1: '',
         password2: '',           
        }}
        onSubmit={ (values) => console.log(values)} 
        validationSchema={ Yup.object({
            name:      Yup.string()
                          .min(2,'Must be 2 character at least')
                          .max(15,'Must be 15 character max')
                          .required('Required'),
            email:     Yup.string()
                          .email('Must be a valid email')
                          .required('Required'),
            password1: Yup.string()
                          .min(6,'Must be 6 character at least')
                          .required('Required'),
            password2: Yup.string()
                          .oneOf([Yup.ref('password1')],'The passwords must be equals')
                          .required('Required')

         })
        }
      >
         {
            ({handleReset}) => (
               <Form>
                  <MyTextInput label="Nombre" name="name" placeholder="Felipe"/>
                  <MyTextInput label="Email" name="email" type="email" placeholder="ejemplo@email.com"/>
                  <MyTextInput label="Password" name="password1" type="password"/>
                  <MyTextInput label="Confirm Password" name="password2" type="password"/>
                  <button type="submit">Create</button>
                  <button type="button" onClick={ handleReset }>Reset</button>
               </Form>
            )
         }
      </Formik>
    </div>
  )
}
