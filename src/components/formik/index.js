import React from 'react'
import { Formik,Field,Form,FieldArray ,ErrorMessage }  from 'formik'
import {FormikInitialValues,validationSchimas} from "./Initial"
import Child from "./child"




const FormikTest = () => {

    const onSubmit = (e) => {
        console.log(e);
    }        


  return (
    <div style={{width: "500px",margin : "auto"}}>

    <Formik onSubmit={onSubmit}
    initialValues={FormikInitialValues}
    validationSchema={validationSchimas}>

    <Form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <Field  name='email' type="email" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp"/>
   <ErrorMessage name='email' component={Child}></ErrorMessage>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <Field name='password' type="password" class="form-control" id="exampleInputPassword1"/>
    <ErrorMessage name='password' component={Child}></ErrorMessage>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</Form>
</Formik>
    
    </div>
  )
}

export default FormikTest