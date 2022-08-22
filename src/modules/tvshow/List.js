import React, { Fragment } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { getEpisodes } from '../../data';
import { Outlet } from 'react-router-dom';

export default function List() {
  let episodes = getEpisodes();
  return (
    <Fragment>
      <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{
                minWidth: 650
            }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Score</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { episodes.map((episode) => (
                        <TableRow 
                            key = {episode.number}
                            sx = {{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component='th' scope = 'row'>
                                {episode.number}
                            </TableCell>
                            <TableCell align='right'>{episode.date}</TableCell>
                            <Link to={`/tvshows/detail/${episode.number}`}>
                                <TableCell align='right'>{episode.name}</TableCell>
                            </Link>
                            <TableCell align='right'>⭐⭐⭐</TableCell>
                            <TableCell align='right'>status</TableCell>
                        </TableRow>
                    
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Fragment>
  )
}
