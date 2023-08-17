import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TodoContext } from '../TodoContext'
import { createTheme } from '@mui/material';

function CircularProgressWithLabel(props) {
  const theme = createTheme({
    palette: {
      primary:{
        main: '#EA1179'
      }
    }
  })

  return (
    <Box sx={{ 
      position: 'relative', 
      gridRow:'2',
      display: 'grid',
      gridTemplateRows:'10% 90%',
      alignItems: 'center',
      justifyItems:'center',
      width: '100%'
    }}>
      <h4 style={{
        gridRow:'1'
      }}>
        You have completed the {` ${Math.round(props.value) ?  Math.round(props.value): '0'}% `} 
        of all your tasks!
      </h4>
      <CircularProgress style={{
        gridRow:'2'
      }}
        variant="determinate" {...props} 
        size={200}
        theme = {theme}
      />
      <Box style={{
        gridRow:'2'
      }}
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
         
      >
        <Typography  style={{
        gridRow:'2'
      }}
          variant="caption" 
          component="div" 
          color="text.secondary"
          fontSize="40px"
        >
          {` ${Math.round(props.value) ?  Math.round(props.value): '0'} %`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(0);
  const{
    percentage
  } = React.useContext(TodoContext);



  React.useEffect(() => {
    setProgress(percentage)
  }, [percentage]);

  return <CircularProgressWithLabel value={progress} />;
}