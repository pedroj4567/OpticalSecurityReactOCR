import * as React from 'react';
import { Link } from 'react-router-dom'

// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Fade from '@mui/material/Fade';
import SettingsIcon from '@mui/icons-material/Settings';

export default function MenuItems() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='flex px-8 justify-center py-2 items-center hover:bg-[#DAFFFB] transition-colors hover:text-[#001C30] rounded-lg'
      >
        
        <span className=' text-md mr-2'>Opciones</span> 
        <SettingsIcon/> 
      </button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        
      >
        <MenuItem>Salir</MenuItem>
        <MenuItem>Configuracion</MenuItem>

      </Menu>
    </div>
  );
}