import React, { useEffect, useState } from 'react'
import parseAssetId from '../../../utils/composeUrl'
import Image from 'next/image'
type Props = {}

function ImagePanel({ images, windowDimensions }: any) {
    return (
        <>
            <div className='marquee-1'>{
                images.map((item: any, i: number) => <Image placeholder='blur' blurDataURL={item.imageData.blurhash} alt='' key={i + 'a'} width={1000} height={1000 / item.imageData.aspectRatio} src={(item.imageData.url)} />)}</div>
            <div className='marquee-2'>{
                images.map((item: any, i: number) => <Image placeholder='blur' blurDataURL={item.imageData.blurhash} alt='' key={i + 'b'} width={1000} height={1000 / item.imageData.aspectRatio} src={(item.imageData.url)} />)}</div>
        </>
    )

}

export default ImagePanel