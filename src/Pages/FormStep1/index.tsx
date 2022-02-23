import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { SxProps } from '@mui/system';
import  NotificationsNoneOutlinedIcon  from '@mui/icons-material/NotificationsNoneOutlined';
import  Badge  from '@mui/material/Badge';
import  IconButton  from '@mui/material/IconButton';
import { Typography } from '@material-ui/core';

export default function FormStep1() {
  const [openNow, setOpenNow] = React.useState(false);

  const handleClickNow = () => {
    setOpenNow((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenNow(false);
  };

  const styles: SxProps = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
    color:"black",
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        
        <IconButton
                disableRipple={true}
                disableFocusRipple={true}
                size="small" 
                aria-label="show 17 new notifications"
                onClick={handleClickNow}              
              >
             
                <Badge badgeContent={5} color="error">
                  <NotificationsNoneOutlinedIcon/>
                </Badge>
                
              </IconButton>
       
        {openNow ? (
          <Box sx={styles}>
            <Typography style={{}}>PDC Overdue today 2000 AED </Typography> 
           <Typography> Outstanding balance 2450 AED</Typography>
           <Typography> Invoice outstanding 34,223 AED</Typography> 
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
