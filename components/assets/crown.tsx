import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg
    preserveAspectRatio="none"  
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        {...props}
    >
        <path
            d="M469.109 134.406c-23.688 0-42.891 19.203-42.891 42.891 0 11.281 4.453 21.453 11.563 29.109l-76.875 75.969-93.813-144.766c18.281-4.922 31.797-21.438 31.797-41.266 0-23.672-19.203-42.875-42.891-42.875s-42.891 19.203-42.891 42.875c0 19.828 13.516 36.344 31.797 41.266l-93.813 144.766-76.875-75.969c7.109-7.656 11.563-17.828 11.563-29.109 0-23.688-19.203-42.891-42.891-42.891S0 153.609 0 177.297s19.203 42.891 42.891 42.891v238.344h426.218V220.188c23.688 0 42.891-19.203 42.891-42.891s-19.203-42.891-42.891-42.891z"
        />
    </svg>
)

export default SvgComponent
