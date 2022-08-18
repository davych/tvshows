import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, Outlet } from 'react-router-dom';
import { getEpisodes } from '../../data';

export default function EpisodeDetailPage() {
    let episodes = getEpisodes();
  return (
    <div>
        {/* <BreadCrumbs breads = {breadsValue}/> */}
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
                            <Link to={`/Shows/${episode.number}`}>
                                <TableCell align='right'>{episode.name}</TableCell>
                            </Link>
                            <TableCell align='right'>⭐⭐⭐</TableCell>
                            <TableCell align='right'>status</TableCell>
                        </TableRow>
                    
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Outlet />
      </div>
  )
}