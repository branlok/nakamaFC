import Image from 'next/image'
import React from 'react'
import Moogle from '../../assets/moogle'
import ExpandableListItem from '../../Blocks/ExpandableListItem'
import StyledFaqLayout from './styled'
import { useTrail, animated, a } from '@react-spring/web'

function Faq({ data }: any) {
    const [trails, api] = useTrail(
        data.length,
        () => ({
            from: { opacity: 0,translateY: 20 },
            to: { opacity: 1,translateY: 0 },
        }),
        []
    )

    return (
        <StyledFaqLayout>
            <div className='left-wrapper'>
                <Moogle /> </div>
            <div className='wrapper'>
                <h1>Frequently Asked Questions</h1>
                <ul>
                    {trails.map((props, idx) => (
                        <a.div style={props} key={data[idx]._id} >
                            <ExpandableListItem question={data[idx].faq_question} answer={data[idx].faq_answer} />
                        </a.div>
                    ))}
                </ul>
            </div>
        </StyledFaqLayout>
    )
}

export default Faq