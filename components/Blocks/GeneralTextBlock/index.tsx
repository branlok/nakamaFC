import { PortableText } from '@portabletext/react'
import React from 'react'
import parseAssetId from '../../../utils/composeUrl'
import StyledGeneralBlock from './styled'

type Props = {
    data: any,
    config?: {
        color?: string
    },
    extensibleFooter: any
}


// limit the amount of text, since this is a hook that takes rendesr large fonts.

function GeneralTextBlock({ data, config = { color: 'white' }, extensibleFooter = null }: Props) {
    const myPortableTextComponents = {
        types: {
            image: ({ value }: any) => <img src={parseAssetId(value.asset._ref)} />,
        },
    }



    return (
        <StyledGeneralBlock color={config?.color} >
            <div className="content">
                <PortableText value={data} components={myPortableTextComponents} />
            </div>
            {extensibleFooter}
        </StyledGeneralBlock >
    )
}

export default GeneralTextBlock