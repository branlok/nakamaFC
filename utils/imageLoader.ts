export default function imageLoader({src = "", width = 500, height = 500, blurring = false}) {
    return `${src}?w=${width}&${blurring ? 'blur=500' : ''}`
}