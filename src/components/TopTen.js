import React, { useState } from 'react';

export function TopTen() {
    const [top10, setTop10] = useState([]);
    const [src, setSrc] = useState('');
    const [streaming, setStreaming] = useState(false);

  
// get top10 data from audius api
    fetch('https://audius-dp.amsterdam.creatorseed.com/v1/tracks/trending')
        .then(res => res.json())
        .then(data => {
            setTop10(data.data.slice(0, 10))
            console.log(top10)
        })
        .catch(error => console.log(error))
    
    const getTrack = async (id) => {
        
        //use id to fetch audio file from api 

        const res = await fetch(`https://audius-metadata-3.figment.io/v1/tracks/${id}/stream?app_name=EXAMPLEAPP`,
        {
          method: 'GET'
        
        });

        // set source to the url from api response
        setSrc(res.url)

        // create a new variable storing the audio element with specifed source from above
        const audio = new Audio(src);

        const playPauseTrack = () => {
            if (streaming) {

                setStreaming(false)
                audio.pause()
                console.log('paused')
                
            } else {
                setStreaming(true)
                audio.play()
                console.log(`streaming`)
            }
            
        }

        return playPauseTrack();
 
    }


    return (
        <div className='top10'>
            {top10.map(item => {
                return (
                    <div className='song-card' key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.artwork["150x150"]} alt={item.title + ' track artwork'}></img>
                        <h3>{item.genre}</h3>
                        <button className='playBtn' onClick={ () => getTrack(item.id) } >
                            play track
                        </button>
    
                    </div>
                )
            })}
        </div>
    )
}
