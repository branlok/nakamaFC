import React from 'react'
import parseAssetId from '../../../utils/composeUrl'

type Props = {}

function ImagePanel({ images }: any) {
    return (
        <>
            <div className='marquee-1'>{
                images.map((item: any, i: number) => <img key={i + 'a'} src={(item.imageData.url)} />)}</div>
            <div className='marquee-2'>{
                images.map((item: any, i: number) => <img key={i + 'b'} src={(item.imageData.url)} />)}</div>
        </>
    )
}

export default ImagePanel