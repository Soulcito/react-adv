import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>
      <hr />

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={ ( values ) => {
            console.log( values );
        }}
        validationSchema={ Yup.object({
            firstName: Yup.string()
                          .max(15, 'Must be 15 characters or less')
                          .required('Required'),
            lastName : Yup.string()
                          .max(15, 'Must be 1 characters or less')
                          .required('Required'),
            email    : Yup.string()
                          .email('Must be valid email')
                          .required('Required'),
            terms    : Yup.boolean()
                          .oneOf([true], 'Must be accept the term and conditions'),
            jobType  : Yup.string()
                          .notOneOf(['it-jr'],'This option is not accepted')
                          .required('Required')
                      
         })
        }
      >
        { (formik) => (
              <Form>
                  
                  <MyTextInput 
                     label="First Name" 
                     name="firstName"
                     placeholder="Felipe"
                  />

                  <MyTextInput 
                     label="Last Name" 
                     name="lastName"
                     placeholder="Hinojosa"
                  />                  

                  <MyTextInput 
                     label="Email Address" 
                     name="email"
                     placeholder="example@email.com"
                     type="email"
                  />                 

                  <MySelect
                    label="Job Type"
                    name="jobType"
                  >
                      <option value="">Pick something</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="it-senior">IT Senior</option>
                      <option value="it-jr">IT Jr.</option>
                  </MySelect>

                 <MyCheckbox
                   label="Terms & Conditions"
                   name="terms"
                 /> 

                  <button type="submit">Submit</button>
              </Form>
          ) 
        }
      </Formik>       
    </div>
  )
}
