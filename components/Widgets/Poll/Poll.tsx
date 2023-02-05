import React, { useState } from 'react'
import Send from '../../assets/send';
import Ship from '../../assets/ship';
import Smiley from '../../assets/smiley';
import StyledForm from './styled';

type Props = {}

function Poll({ question = "Questions?", endPoint }: any) {
    let [textarea, setTextarea] = useState<null | string>(null);
    let [status, setStatus] = useState<'success' | 'error' | 'loading' | 'uninitialized'>('uninitialized');
    let [showForm, setShowForm] = useState(false);
    let submitPost = async () => {
        await fetch('https://polls.bobhere.workers.dev/', {
            method: 'POST',
            body: JSON.stringify({ subject: `posttitle-${question.title}`, body: textarea }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => console.log(res.status))
            .then(r => setStatus('success'))
            .catch(err => console.log(err))
    }


    return (
        <StyledForm onSubmit={(e) => {
            e.preventDefault();
            submitPost();

        }}>
            <h1>{question.title}</h1>
            {!showForm ? <div className='form-cover' onClick={() => setShowForm(true)}>
                <button>
                    Click here to Show Form
                </button>
            </div> :
                (status === "uninitialized") && (<>
                    <div className='textarea-wrapper'>
                        <textarea placeholder='a message here' onChange={(e) => { setTextarea(e.currentTarget.value) }} value={textarea ?? ""} />
                        <Ship />
                    </div>
                    <div className="cta">
                        <button><span>Send</span><Send /></button>
                    </div>
                </>
                )}
            {(status === "success") && <div className='result'>Yo ho ho! <br/> Thanks, we delivered your message!</div>}
            {(status === "loading") && <div className='result'>Sending...</div>}
            {(status === "error") &&
                <div className='result'>Somethign went wrong, we could not send the messsage<button onClick={() => setStatus('uninitialized')}>Retry?</button>
                </div>}
        </StyledForm >
    )
}

export default Poll