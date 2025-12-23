/*export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailResult = emailRegex.test(email);
    return emailResult;
  };*/



  export const validateName=(name:string):string=>{
  if (name.length===0){
        return "* Name is Required";
  }
      else if (name.length <3){
        return '* Must Contain atleast 3 Characters';
      }else if (/\d/.test(name))
         {  
    return "* Name cannot contain numbers";
      } 
      else{
        return '';
      }
}


  export const validateEmail=(email:string):string=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === ""){
      return "* Email is Required";
    }
    else if(!emailRegex.test(email)){
      return "* Must Enter Valid Email Format";
    }
     return "";
  }
export const validatePassword = (pword: any):string => {
    /*const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?])[A-Za-z\d@$!%*?&#^()\-_=+{}[\]|;:'",.<>\/?]{6,}$/;*/
    if (pword.length ===0){
      return "* Password is Required";
    }
    else if (pword.length<8){
      return "* Must Contain atleast 8  Characters.Use a stronger password (letters, numbers & symbols)";
    }
    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(pword)) {
       return "* Must Contain atleast one Special Character ";
  }
  if (!/[A-Z]/.test(pword)) {
    return "* Must contain at least one uppercase letter";
  }
  if (!/[a-z]/.test(pword)) {
    return "* Must contain at least one lowercase letter";
  }
  if (!/[0-9]/.test(pword)) {
    return "* Must contain at least one number";
  }
  else{
    return '';
  }
  };