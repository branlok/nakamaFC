import React from 'react'
import StyledGeneralBlock from './styled'

type Props = {}


// limit the amount of text, since this is a hook that takes rendesr large fonts.

function GeneralTextBlock({ }: Props) {
    return (
        <StyledGeneralBlock>
            <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget volutpat tortor. Nam quis metus efficitur, luctus felis vitae, convallis ante. Sed placerat fringilla dui eget molestie. Suspendisse vitae lorem mollis, ultricies lorem non, pharetra sapien. Phasellus venenatis ligula id pretium finibus. Ut tincidunt porta sapien, vel lobortis est ultrices vel. Cras eleifend pellentesque malesuada. Vestibulum vitae est rhoncus, maximus ipsum a, sollicitudin turpis. Suspendisse a malesuada ipsum. Phasellus eu feugiat eros, a sodales purus. Ut facilisis lacinia rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed at felis id neque volutpat convallis sit amet sed sem. Etiam vitae risus dolor. Sed nec mi blandit, tincidunt elit non, gravida ligula. Aliquam molestie, odio id bibendum pulvinar, felis elit egestas felis, et maximus nisi diam placerat est.
                <br /> <br /> Aliquam mauris ipsum, finibus non felis at, dignissim volutpat mauris. Nunc sit amet luctus lacus. Pellentesque facilisis eros ac nulla eleifend, nec fermentum orci sagittis. Curabitur pellentesque arcu at congue tempor. Praesent accumsan eget metus id posuere. Suspendisse hendrerit, lacus et interdum semper, ipsum enim pretium orci, eget placerat libero massa sed ante. In aliquet semper elit sed porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec massa dui, consectetur nec convallis eget, tempor nec metus. Proin sed feugiat mi. Donec aliquam euismod mollis. Cras quis tristique elit. Donec bibendum porttitor felis, id consequat urna viverra non. Donec tristique aliquet purus id maximus. Vestibulum consequat urna ut lacus imperdiet, vitae placerat nisl venenatis. Ut in finibus ipsum, a suscipit dui.
            </div>
        </StyledGeneralBlock>
    )
}

export default GeneralTextBlock