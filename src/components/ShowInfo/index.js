import Paper from '@mui/material/Paper'
import React from 'react'

export default function index() {
  return (
    <Paper sx={{
        bgcolor: '#f7f7f7'
    }}>
        <section id="general-info-panel" class="callout" style={{
            textAlign: 'left',
            padding: '10px',
            paddingLeft: '15px',
            fontSize: '18px',
            lineHeight: '30px',
        }}> 
            <h2 style={{
                fontWeight: 'lighter',
                fontSize: '30px'
            }}>Show Info</h2>
                <div>
                    <strong>Network: </strong>
                    <img class="flag-align" src="https://static.tvmaze.com/intvendor/flags/us.png" alt="United States" title="United States" />
                    <a href="/networks/11/cartoon-network">Cartoon Network</a>                        
                    <span id="year">(2016-now)</span>
                </div>
                <div>
                    <strong>Schedule: </strong> Sundays at 17:30(15 min)
                </div>
            
                <div>
                    <strong>Status: </strong> Running
                </div>
                <div>
                    <strong>Show Type: </strong> Animation
                </div>
                <div>
                    <strong>Genres:</strong>
                    <span class="divider">
                        <span>Comedy</span><span>|</span>
                        <span>Action</span><span>|</span>
                        <span>Science-Fiction</span>
                    </span>
                </div>
                <div>
                    <strong>Episodes ordered: </strong>
                    <a href="/seasons/85384/the-powerpuff-girls-season-3">39 episodes</a>
                </div>
                <p>
                    <strong>Official site:</strong>
                    <a href="https://www.cartoonnetwork.com/video/powerpuff-girls/index.html" rel="noopener" target="_blank">www.cartoonnetwork.com</a>
                </p>
        </section>
    </Paper>
    
  )
}
