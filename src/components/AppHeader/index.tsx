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
import React, { useRef } from 'react'
import { useMenuState } from '../../hooks/use-menu-state'
import { useScreenTitleQuery } from './helpers'
import { useStyles } from './styles'

export function AppHeader() {
  const { screenTitle } = useScreenTitleQuery()
  const { user, logout } = useAuth0()
  const classes = useStyles()
  const menuAnchorRef = useRef<HTMLButtonElement>(null)
  const { isOpen, closeMenu, openMenu } = useMenuState()

  const initials = user.given_name?.[0] + user.family_name?.[0] || ''

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
          {screenTitle}
        </Typography>
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-profile"
            aria-haspopup="true"
            onClick={openMenu}
            color="inherit"
            ref={menuAnchorRef}
          >
            <Avatar alt={user?.name} variant="circle" src={user?.picture}>
              {initials}
            </Avatar>
          </IconButton>
          <Menu
            id="menu-profile"
            anchorEl={menuAnchorRef.current}
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
