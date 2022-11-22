import React, { useState } from 'react';

export function TopTen() {
    const [top10, setTop10] = useState([]);
    const [src, setSrc] = useState('');
    const [streaming, setStreaming] = useState(false);

  

    fetch('https://audius-dp.amsterdam.creatorseed.com/v1/tracks/trending')
        .then(res => res.json())
        .then(data => {
            setTop10(data.data.slice(0, 10))
            console.log(top10)
        })
        .catch(error => console.log(error))
    
    const playTrack = async (id) => {
        const res = await fetch(`https://audius-metadata-3.figment.io/v1/tracks/${id}/stream?app_name=EXAMPLEAPP`,
        {
          method: 'GET'
        
        });
        setSrc(res.url)
        const audio = new Audio(src);

        const state = {
            audio: new Audio(src), 
            isPlaying: false
        }

        if (streaming === false) {
            state.audio.play()
            setStreaming(true)
        } else {
            setStreaming(false)
            state.audio.pause()
            console.log('PAUSED')
        }
       
    }

    return (
        <div className='top10'>
            {top10.map(item => {
                return (
                    <div className='song-card' key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.artwork["150x150"]} alt={item.title + ' track artwork'}></img>
                        <h3>{item.genre}</h3>
                        <button className='playBtn' onClick={ () => playTrack(item.id)} >
                            play track
                        </button>
    
                    </div>
                )
            })}
        </div>
    )
}
