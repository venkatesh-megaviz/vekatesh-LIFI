import { Box } from "@mui/material"
import Big_Logo from "../assets/Big_Logo.png";
const Biglogo = () => {
  return (
      <Box
          display="flex"
          component="img"
          src={Big_Logo}
          alt="Logo"
          sx={{ width: "180px" }}
        />
  )
}

export default Biglogo
