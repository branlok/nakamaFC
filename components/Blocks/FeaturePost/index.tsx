import { PortableText } from '@portabletext/react';
import { a, useSpring } from '@react-spring/web';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import parseAssetId from '../../../utils/composeUrl';
import PostNav from './PostNav';
import StyledFeatureBlock from './styled'
import TimeAgo from 'react-timeago'
import Link from 'next/link';
import ExternalLink from '../../assets/externalLink';

type Props = { author: string, title: string, content: string, createdOn: string, tags: string[], coverImage: string }

function FeaturePost({ data }: any) {

    let { author, blogCategories, blogpostImage, content, tags, title, slug } = data;
    let [openViewer, setOpenViewer] = useState(false);
    let [contentHeight, setContentHeight] = useState(0);
    let [imageHeight, setImageHeight] = useState(0);
    let ref = useRef<HTMLDivElement>(null);
    let imageRef = useRef<HTMLImageElement>(null);
    let [recentlyResized, setRecentlyResized] = useState<boolean | number>(false);

    let newblogpostImage = typeof blogpostImage === 'string' ? blogpostImage : blogpostImage.blogpostImage;

    const [dimensions, setDimensions] = useState({
        width: !!globalThis ? globalThis.innerWidth : 0,
        height: !!globalThis ? globalThis.innerHeight : 0,
    });

    let [spring2, api2] = useSpring(() => {
        return {
            height: dimensions.width < 1399.98 ? (openViewer ? contentHeight + 270 + imageHeight + 'px' : imageHeight + 380 + 'px') : (openViewer ? contentHeight + 340 + 'px' : '355px'),
            config: {
                duration: 0
            }
        }
    }, [contentHeight, imageHeight, openViewer, dimensions])

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        setRecentlyResized(Math.random());
    }


    React.useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    useEffect(() => {
        let timeout: string | number | NodeJS.Timeout | undefined;
        if (ref.current && imageRef.current) {
            timeout = setTimeout(() => {
                setContentHeight(ref?.current?.scrollHeight ?? 500);
                setImageHeight(imageRef?.current?.clientHeight ?? 500);
            }, 500)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [data, dimensions]);






    const myPortableTextComponents = {
        types: {
            image: ({ value }: any) => <Image placeholder='blur' blurDataURL={value.asset.lqip} width={500} height={500 / value.asset.aspectRatio} src={parseAssetId(value.asset._ref)} alt={''} />,
        }
    }

    return (
        <StyledFeatureBlock avgColor={blogpostImage.averageColor} openViewer={openViewer}  >
            <div className='nav-wrapper'>
                <PostNav author={author.name} blogCategories={blogCategories} slug={slug} role={author.role} />
            </div>
            <div className="wrapper">
                <a.div style={spring2} className="main-wrapper">
                    <div className="left">
                        <h1>
                            {title}
                        </h1>
                        <div className="date-slot">
                            <h2>
                                <TimeAgo date={data.createdOn} />
                            </h2>
                            {<Link className='external-link' scroll={true} href={`/blog/posts/${slug}`}>Open <ExternalLink /></Link>}
                        </div>
                        <div className="preview-box" ref={ref}>
                            <PortableText value={content} components={myPortableTextComponents} />
                        </div>
                        <div className='cta'>
                            <button onClick={() => setOpenViewer(prev => !prev)}>{!openViewer ? "Show More" : "Show Less"}</button>
                        </div>
                    </div>
                    <div className="right">
                        <Image placeholder='blur' blurDataURL={blogpostImage.lqip} alt='' width={600} height={400} priority={true} ref={imageRef} src={newblogpostImage}>
                        </Image>
                    </div>
                </a.div>
                <>
                    <div className="blur-filter"></div>
                    {/* <img  src={newblogpostImage}> */}
                    <Image placeholder='blur' blurDataURL={blogpostImage.lqip} alt='' className='bg-image' width="600" priority={true} height="400" ref={imageRef} src={newblogpostImage}>
                    </Image>
                    {/* </img> */}
                </>

            </div>
        </StyledFeatureBlock >
    )
}

export default FeaturePost