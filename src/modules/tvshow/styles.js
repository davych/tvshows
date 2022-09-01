import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles({
  listContainer: {
    width: '80%',
    margin: 'auto',
    marginTop: '20px',
    backgroundColor: '#f3f3f3'
  },
  summary: {
    width: '400px',
    height: '190px',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    textOverflow: 'ellipsis',
    marginLeft: '5px'
  },
  listItem: {
    display: 'flex',
    padding: '5px',
    marginTop: '5px'
  },
  navLinkStyle: {
    textDecoration: 'none'
  },
  detailCard: {
    width: '80%',
    margin: 'auto',
    marginTop: '20px',
    paddingBottom: '5px'
  },
  cardHeader: {
    margin: 'auto',
    textAlign: 'center'
  },
  cardImg: {
    display: 'block',
    margin: '10px auto'
  },
  leftImg: {
    textAlign: 'center'
  },
  rightBrief: {
    marginLeft: '20px'
  }
})
