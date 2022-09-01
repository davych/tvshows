import SearchIcon from '@mui/icons-material/Search'
import { Button, Paper, IconButton, InputBase, Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'

import { useStyle } from './styles'

export default function Header () {
  const classes = useStyle()

  return (
      <div>
        <Box>
        <Grid className={classes.root}
              container spacing={2}>
            <Grid className={classes.logo} lg={3}>
              LOGO
            </Grid>
            <Grid xs={6}>
                <Paper className={classes.searchBarPaper} component="form">
                    <InputBase className={classes.searchBarIB}
                      placeholder="Search Google Maps"
                      inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton className={classes.searchBarIBtn}
                                type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
            <Grid xs={3}>
                <Button className={ classes.loginBtn } color='success' size='large'>LOGIN</Button>
                <Button className={ classes.loginBtn } color='success' size='large'>REGISTER</Button>
            </Grid>
        </Grid>
        </Box>
    </div>
  )
}
