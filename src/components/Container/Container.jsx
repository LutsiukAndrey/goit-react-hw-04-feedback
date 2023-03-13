import s from './Container.module.css'
export const Container = ({children}) =>{
  return(
      <div className={s.container}> 
         <h1>Please leave feedback</h1>
       {children}</div> 

      ) 
   }