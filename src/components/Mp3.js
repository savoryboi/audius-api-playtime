// import {useEffect, useState} from 'react';
// import libs from '@audius/libs';
// import stems from '@audius/stems';


// function Mp3(track_id) {
//     const [host, setHost] = useState(null);

//     const selectHost = async () => {
//         let response = await fetch('http://api.audius.co');
//         let data = await response.json();
//         let host_url = data[Math.floor(Math.random) * data.length];

//     }

//     const fetchTrack = async () => {
//         let track = await fetch(`${host}/v1/tracks/${track_id}/stream`)
        
//         let playTrack = new Audio();

//         playTrack(track)
//     }
// }

// export default Mp3;
