import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { styled } from '@mui/material/styles';

const RowContainer = styled(Grid)(({ theme }) => ({
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Link = styled(Typography)({
    textDecoration: 'none',
  });
  

const CopyButton = styled(Button)(({ theme }) => ({
    color: theme.palette.success.main,
    borderColor: theme.palette.success.main,
    "&:hover": {
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.main,
    },
}));

function TextWithLinkAndButton() {
  const handleCopyClick = () => {
    // Handle copy logic here
  };

  return (
    <RowContainer container>
      <Grid item>
        <LinkIcon />
      </Grid>
      <Grid item>
        <Typography variant="body1" style={{ marginLeft: '8px',marginRight: '8px' }}>
          Website Link: 
        </Typography>
      </Grid>
      <Grid item  style={{ marginRight: '8px' }}>
        <Link component="a" href="https://www.example.com">
          View
        </Link>
      </Grid>
      <Grid item style={{ marginRight: '8px' }}>
      <Link href="https://www.example.com" component="a">
          Edit
        </Link>
      </Grid>
      <Grid item >
        <CopyButton variant="outlined" endIcon={<FileCopyIcon />} onClick={handleCopyClick}>
          Copy
        </CopyButton>
      </Grid>
    </RowContainer>
  );
}

export default TextWithLinkAndButton;