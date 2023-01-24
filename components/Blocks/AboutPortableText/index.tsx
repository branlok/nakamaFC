import { PortableText } from '@portabletext/react'
import React from 'react'

type Props = {}

function AboutPortableText({ data }: any) {
    return (
        <>
        <PortableText value={data} />
        </>
    )
}

export default AboutPortableText