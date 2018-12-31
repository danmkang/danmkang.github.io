import React from 'react';
import speakerData from '../datasets/speakerData.js'
import Speaker from '../components/Speaker'

const SpeakerSet = ({ classes }) => {
    return (
        speakerData.map((speaker, i) => {
            return (
                <Speaker 
                    key={`key-${i}`}
                    img={speaker.img}
                    name={speaker.name}
                    title={speaker.title}
                    company={speaker.company}
                />
            )
        })
    )
}

export default SpeakerSet;