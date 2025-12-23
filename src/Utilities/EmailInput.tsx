import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  FormControl,
  IconButton,
  TextField,
} from "@mui/material";
import { useAuthStyles } from "../Auth/LoginStyles";
import InputAdornment from "@mui/material/InputAdornment";
import { validateEmail } from "./validations";

type Iprops={
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  onErrorChange:(error:string)=>void;
  emailError:string;
  value:string;
}
const EmailInput = ({onChange,emailError,value,onErrorChange}:Iprops) => {
  const { classes: authClasses } = useAuthStyles();

  const onEmailHandle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const emailInput = e.target.value;
    onChange(e);
    const result = validateEmail(emailInput);
    onErrorChange(result);
  }

  return (
          <FormControl fullWidth>
                <TextField
                  placeholder="Email Id"
                  className={authClasses.inputFileds}
                  type="Email"
                  size="medium"
                  value={value}
                  onChange={onEmailHandle}
                  error={!!emailError} 
                  helperText={emailError}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton edge="start">
                          <MailOutlineIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

              </FormControl>
  )
}

export default EmailInput
