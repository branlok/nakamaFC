import React, { useRef, useState } from 'react'
import StyledLi from './styled';

type Props = {}

function ExpandableListItem({ id, question, answer }: any) {
    let [open, setOpen] = useState(false);
    let ref = useRef(null);

    
    return (
        <StyledLi ref={ref} open={open} onClick={() => { setOpen((prev) => !prev) }}>
            <div className="question">{question}</div>
            <div className="answer">{answer}</div>
        </StyledLi>
    )
}

export default ExpandableListItem