import React from 'react'

 const VideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    
    return (
        <div className='p-2 m-2 w-72'>
            <img className="rounded-lg"alt="thumbnails" src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold'>{title}</li>
                <li> {channelTitle}</li>
                <li>{statistics.viewCount} - Views</li>
            </ul>
        </div>
    )
}

export default VideoCard;