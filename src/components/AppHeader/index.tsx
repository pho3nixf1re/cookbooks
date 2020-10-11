import { useAuth0 } from '@auth0/auth0-react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import React from 'react'
import { useMenuState } from '../../hooks/use-menu-state'
import { useStyles } from './styles'

type Props = {
  title: string
}

export function AppHeader({ title }: Props) {
  const { user, logout } = useAuth0()
  const initials = user.given_name?.[0] + user.family_name?.[0] || ''
  const classes = useStyles()
  const { isOpen, closeMenu, openMenu, element } = useMenuState()
  const handleLogout = () => {
    closeMenu()
    logout({ returnTo: window.location.origin })
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-profile"
            aria-haspopup="true"
            onClick={openMenu}
            color="inherit"
          >
            <Avatar alt={user?.name} variant="circle" src={user?.picture}>
              {initials}
            </Avatar>
          </IconButton>
          <Menu
            id="menu-profile"
            anchorEl={element}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted={true}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isOpen}
            onClose={closeMenu}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            <MenuItem onClick={closeMenu}>Profile</MenuItem>
            <MenuItem onClick={closeMenu}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}
