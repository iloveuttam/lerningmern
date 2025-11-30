import './App.css'
import { useForm} from 'react-hook-form';

function App() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting },
  } = useForm();


  async function onsubmit(data){
    await new Promise ((resolve) => setTimeout(resolve,5000));
    console.log("Submitting the form",data);
  }

  return (
      <form onSubmit={handleSubmit(onsubmit)} >
          <div>
              <label htmlFor="">First Name:</label>
              <input 
               className={errors.firstName ? 'input-error':''}
               {...register('firstName',
               {required:true,
               minLength:{value:3,message:'min len atleast 3'},
               maxLength:8,
               })}/>
               {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
          </div>
          <div>
              <label htmlFor="">Middle Name:</label>
              <input type="text" {...register('middleName')} />//this registered the input to the hook
          </div>
          <div>
               <label htmlFor="">Last Name:</label>
              <input type="text"
                className={errors.lastName ? 'input-error' : ''}
                 {...register('lastName',
                {pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                         message: "Password must contain uppercase, lowercase, number & be 8+ chars"}})} />
                         {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
              
          </div>
          <br />
           <input type="submit" disabled={isSubmitting} value={isSubmitting?"submiting":"submit"} />
      </form>
  )
}

export default App
