import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles({
  root: {
    backgroundColor: '#282c34',
    marginTop: '5px'
  },
  logo: {
    backgroundColor: 'lightgrey',
    fontSize: '40px',
    textAlign: 'center'
  },
  searchBarPaper: {
    padding: '2px 4px',
    marginLeft: '5px',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    width: '400px'
  },
  searchBarIB: {
    marginLeft: 1,
    flex: 1
  },
  searchBarIBtn: {
    padding: '10px'
  },
  loginBtn: {
    marginRight: '20px',
    fontSize: '20px'
  }
})
