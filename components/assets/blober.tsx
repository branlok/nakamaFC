import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio="xMid yMid meet" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path fill="#001220" d="M0 0h2400v1600H0z" />
        <path
            d="M2400 1298c-146-65.6-292-131.1-463-180.1-171.1-49-367.1-81.4-454.8-200.1-87.7-118.7-67-323.7-112.3-491.1-45.3-167.4-156.6-297-267.9-426.7h1298ZM0 302c154 41.3 308 82.7 482.6 133 174.5 50.3 369.5 109.6 435.2 247.2 65.7 137.6 2.1 353.4 44 519.4 41.8 166 189 282.2 336.2 398.4H0Z"
            fill="#FBAE3C"
        />
    </svg>
)

export default SvgComponent
