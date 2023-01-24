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
        <path d="M128 20a108 108 0 1 0 31.74 211.258 11.996 11.996 0 0 0 4.963-2.987l63.57-63.573a12.005 12.005 0 0 0 2.986-4.963A108.075 108.075 0 0 0 128 20Zm81.116 129.914-59.198 59.2a83.895 83.895 0 1 1 59.198-59.2ZM76 108a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm72 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm31.968 50.005a60.016 60.016 0 0 1-103.935 0 12 12 0 1 1 20.775-12.015 36.016 36.016 0 0 0 62.384 0 12 12 0 0 1 20.776 12.015Z" />
    </svg>
)

export default SvgComponent
