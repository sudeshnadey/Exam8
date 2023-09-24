import * as React from 'react';
import Box from '@mui/material/Box';
import { Stepper, Step, StepLabel, createTheme, ThemeProvider } from '@mui/material';
const steps = [
  'Create New Test',
  'Add Question Blueprint',
  'Preview & Create Quiz',
];
const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '0px solid',
          borderColor: '#001233',
        },
        text: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        
      },
      
    },
  },
});
export default function CustomStepper() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{
      '& .MuiStepLabel-root .Mui-completed': {
        color: '#001233', // circle color (COMPLETED)
      },
      '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
      {
        color: '#001233', // Just text label (COMPLETED)
      },
      '& .MuiStepLabel-root .Mui-active': {
        color: '#001233', // circle color (ACTIVE)
      },
      '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
      {
        color: '#001233', // Just text label (ACTIVE)
      },
      '&.Mui-active .MuiStepConnector-line': {
        borderColor: '#FF595A', // Set the desired color for the active step connector line
      },
      '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
        fill: '#FF595A', // circle's number (ACTIVE)
        fontSize: 14,
      },
      
      width: '100%'
    }} style={{ padding: "30px" }}>
      <Stepper   activeStep={0} alternativeLabel> 
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
    </ThemeProvider>

  );
}