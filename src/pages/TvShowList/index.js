import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import BreadCrumbs from '../../components/BreadCrumbs';
import TVShowPage from '../../components/TVShowPage';
import EpisodeDetailPage from '../../components/EpisodeDetailPage';

export default class TvShowList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         breadsValue: ["Main", "Episodes", "Seasons", "Cast", "Crew", "Characters", "Gallery", "News"]
      }
   }
   render() {
      return (
         <div>
            <p style={{ color: 'red' }}>THIS IS TV SHOW LIST PAGE</p>
            <Grid container space={2}>
               <>
                  <div style={{
                     width: '90%',
                     height: '400px',
                     margin: '0 auto',
                     marginTop: '10px'
                  }}>
                     <Grid container space={2}>
                        <Grid xs={12} >
                           <BreadCrumbs breads={this.state.breadsValue} />
                        </Grid>
                        <TVShowPage id="1" title="id 1 movie" />
                        {/* <EpisodeDetailPage /> */}
                     </Grid>
                  </div>

                  <div style={{
                     width: '90%',
                     height: '400px',
                     margin: '0 auto',
                     marginTop: '10px'
                  }}>
                     <Grid container space={2}>
                        <Grid xs={12} >
                           <BreadCrumbs breads={this.state.breadsValue} />
                        </Grid>
                        <TVShowPage id="2" title="id 2 movie" />
                        {/* <EpisodeDetailPage /> */}
                     </Grid>
                  </div>

                  <div style={{
                     width: '90%',
                     height: '400px',
                     margin: '0 auto',
                     marginTop: '10px'
                  }}>
                     <Grid container space={2}>
                        <Grid xs={12} >
                           <BreadCrumbs breads={this.state.breadsValue} />
                        </Grid>
                        <TVShowPage id="3" title="id 3 movie" />
                        {/* <EpisodeDetailPage /> */}
                     </Grid>
                  </div>
               </>
            </Grid>
         </div >
      )
   }
}
