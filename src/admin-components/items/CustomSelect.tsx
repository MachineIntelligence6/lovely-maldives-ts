import { MenuItem, Select } from "@mui/material";
import React from "react";

const CustomSelect = (props: any) => {
  return (
    <Select
      id="outlined-basic"
      placeholder={props?.placeholder}
      variant="outlined"
      value={props.value}
      displayEmpty
      sx={{
        width: { xs: "100%", sm: "70%", lg: "75%", xl: "82%" },
        height: "38px",
        borderRadius: "6px",
        color: "#4B465C",
        opacity: ".7",
        bgcolor: "#F6F6F6",
        border: "1px solid #F6F6F6",
        fontSize: { xs: "12px", sm: "16px" },
        px: "0px",
        "& .MuiSelect-root": {
          color: "#757575",
        },
      }}
    >
      <MenuItem value="" disabled>
        {props?.placeholder}
      </MenuItem>
      {props?.options?.map((option: any, index: number) => (
        <MenuItem key={index} value={option?.value}>{option?.label}</MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect