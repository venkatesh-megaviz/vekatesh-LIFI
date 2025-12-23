import {
  FormControl,
  IconButton,
  TextField,
} from "@mui/material";
import { useAuthStyles } from "../Auth/LoginStyles";
import InputAdornment from "@mui/material/InputAdornment";
import PermIdentityIcon from "@mui/icons-material/PermIdentity"
import { validateName } from "./validations";

type Iprops={
  onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  onErrorChange:(error:string)=>void;
  nameError:string;
  value:string;
}

const NameInput = ({onChange,nameError,value,onErrorChange}:Iprops) => {

  const { classes: authClasses } = useAuthStyles();

  const onNameHandle=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const NameInput = e.target.value;
    onChange(e);
    const result = validateName(NameInput);
    onErrorChange(result)
  }

    return (
    <FormControl fullWidth>
                <TextField
                  placeholder="Name"
                  className={authClasses.inputFileds}
                  type="Name"
                  size="medium"
                  value={value}
                  error={!!nameError}
                  helperText={nameError}
                  onChange={onNameHandle}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton edge="start">
                          <PermIdentityIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
  )
}

export default NameInput
