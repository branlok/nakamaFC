import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M5 12v-2h1V9h1V8h1V7h1V6h2v2h-1v1H9v1h9v2H9v1h1v1h1v2H9v-1H8v-1H7v-1H6v-1" />
    </svg>
)

export default SvgComponent
