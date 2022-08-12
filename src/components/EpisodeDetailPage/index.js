import React, { Component } from 'react';
import BreadCrumbs from '../BreadCrumbs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default class EpisodeDetailPage extends Component {
    constructor( props ){
        super( props );
        this.state = {
            breadsValue: ["S01","S02","S03"],
            rows: [
                {number: '39', date: 'Jun 16, 2019', name: 'Sideline Dad'},
                {number: '38', date: 'Jun 16, 2019', name: 'The Oct-father'}
              ]
        }
    }

  render() {

    return (
      <div>
        <BreadCrumbs breads = {this.state.breadsValue}/>
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
                    { this.state.rows.map((row) => (
                        <TableRow 
                        key = {row.name}
                        sx = {{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component='th' scope = 'row'>
                                {row.name}
                            </TableCell>
                            <TableCell align='right'>{row.number}</TableCell>
                            <TableCell align='right'>{row.date}</TableCell>
                            <TableCell align='right'>{row.name}</TableCell>
                            <TableCell align='right'>⭐</TableCell>
                            <TableCell align='right'>status</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

      </div>
    )
  }
}
