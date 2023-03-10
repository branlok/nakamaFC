import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
    preserveAspectRatio="none" 
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M128 24a104 104 0 1 0 104 104A104.118 104.118 0 0 0 128 24Zm36 72a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-72 0a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm88.998 82.247a8 8 0 0 1-11.245-1.25L160 164.808l-9.753 12.19a8 8 0 0 1-12.494 0L128 164.808l-9.753 12.19a8 8 0 0 1-12.494 0L96 164.808l-9.753 12.19a8 8 0 0 1-12.494-9.995l16-20a8 8 0 0 1 12.494 0L112 159.194l9.753-12.192a8 8 0 0 1 12.494 0L144 159.194l9.753-12.192a8 8 0 0 1 12.494 0l16 20a8 8 0 0 1-1.25 11.245Z" />
    </svg>
)

export default SvgComponent
