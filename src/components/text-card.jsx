import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

function TextCard({children}) {
  const cardStyle = {
    backgroundColor: '#E4E9EC',
    margin:"20px",
  };

  return (
    <Card style={cardStyle}  elevation={0} >
      <CardContent>
        <Typography variant="h5" component="h6" style={{ fontSize: '18px',color:"#6C7781" }}>
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TextCard;