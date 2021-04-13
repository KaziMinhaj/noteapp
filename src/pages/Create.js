import { Button, Container, Typography } from "@material-ui/core";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React from "react";
const Create = () => {
  const handleClick =()=>{
    console.log("clicked");
  }
  return (
    <Container>
      <Typography 
      variant="h6" 
      component="h2" 
      color="textSecondary" 
      gutterBottom
      >
        Create a new note
        </Typography> 
      <Button
        onClick={handleClick}
        type="submit"
        color="secondary"
        variant="contained"
        // startIcon={<SendIcon></SendIcon>}
        endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
      >
        Submit
      </Button>
    {/* <br/>
     <AcUnitOutlinedIcon color="secondary" fontSize="large" ></AcUnitOutlinedIcon>
     <AcUnitOutlinedIcon color="action" fontSize="small" ></AcUnitOutlinedIcon>
     <AcUnitOutlinedIcon color="error" fontSize="small" ></AcUnitOutlinedIcon>
     <AcUnitOutlinedIcon color="disabled" fontSize="small" ></AcUnitOutlinedIcon>
     <AcUnitOutlinedIcon color="primary" fontSize="small" ></AcUnitOutlinedIcon> */}


    </Container>
  );
};

export default Create;
