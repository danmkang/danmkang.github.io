import speaker from '../assets/speaker-card.png';
import partner from '../assets/partner-card.png';
import host from '../assets/host-card.png';

const partnerData = [
    {
        title: 'Become a speaker', 
        description: 'Join our panel of thought leaders in Product Management',
        cta: 'Join our panel', 
        img: `${speaker}`
    },
    {
        title: 'Partner with us', 
        description: 'Collaborate with ProductGo for future meetups and events',
        cta: 'Sponsor our events',
        img: `${partner}`
    },
    {
        title: 'Share your space', 
        description: 'Host a ProductGo meetup or event in your home turf',
        cta: 'Host meetup',
        img: `${host}`
    },
]

export default partnerData;