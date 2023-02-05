import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="icon glyph"
        {...props}
    >
        <path
            d="M21.88 4.73 16.2 20.65A2 2 0 0 1 14.3 22a2 2 0 0 1-1.9-1.31l-2.12-5.52 1.54-1.54 2.49-2.49a1 1 0 1 0-1.42-1.42l-2.49 2.49-1.58 1.55-5.51-2.13a2 2 0 0 1 0-3.83l15.96-5.68a2 2 0 0 1 2.61 2.61Z"
        />
    </svg>
)

export default SvgComponent
