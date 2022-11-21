import React, { useState } from 'react';
import Mp3 from './Mp3';

export function TopTen() {
    const [top10, setTop10] = useState([]);

    fetch('https://audius-dp.amsterdam.creatorseed.com/v1/tracks/trending')
        .then(res => res.json())
        .then(data => {
            setTop10(data.data.slice(0, 10))
            console.log(top10)
        })
        .catch(error => console.log(error))

    return (
        <div className='top10'>
            {top10.map(item => {
                return (
                    <div className='song-card' key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.artwork["150x150"]} alt={item.title + ' track artwork'}></img>
                        <h3>{item.genre}</h3>
                        <button className='playBtn' onClick={function() {
                            const track = new Audio(`https://audius-dp.amsterdam.creatorseed.com/v1/tracks/${item.id}/stream`);
                            track.play()
                        }}>
                            play track
                        </button>
                    </div>
                )
            })}
        </div>
    )
}
