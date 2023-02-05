import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M738 756q-45-77-131-205-6-8-14-15-2-2-1.5-4.5t2.5-3.5q60-29 97-83 40-58 40-124 0-63-31-116t-84-84-116-31-116 31-84 84-31 116q0 66 40 124 37 54 97 83 2 1 2.5 3.5T407 536q-8 7-14 15-88 130-131 205-18 32-18 52 0 27 34.5 50.5t93 37.5T500 910t128.5-14 93-37.5T756 808q0-21-18-52z" />
    </svg>
)

export default SvgComponent
