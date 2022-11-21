import React, { useCallback, useEffect, useState } from "react";
import './App.css';

const HttpApiExample = () => {

const selectHost = async () => {
    const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
    const res = await fetch('https://api.audius.co');
    const hosts = await res.json()
    return sample(hosts.data);
}

    const [track, setTrack] = useState(null)
    const [host, setHost] = useState(null)

    useEffect(() => {
        const fetchTrack = async () => {
            const selectedHost = await selectHost();
            setHost(selectHost)
            const res = await fetch(`${selectedHost}/v1/tracks/trending?limit=1`)
            const json = await res.json()
            const topTrack = json.data[0]
            setTrack(topTrack)
        }
        fetchTrack()
    }, [])

    const [audio, setAudio] = useState(null)
    useEffect(() => {
        if (track) {
            const id = track.id
            const streamUrl = `${host}/v1/tracks/${id}/stream`;
            const audio = new Audio(streamUrl)
            setAudio(audio)
        }
    }, [track])

    const onPlay = useCallback(() => {
        if (audio) {
            audio.play()
        }
    }, [audio])

    return track && (
        <div>
            <button text='play' onClick={onPlay}>play</button>
        </div>
    )
}

export default HttpApiExample;