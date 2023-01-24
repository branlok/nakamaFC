export default function parseAssetId(ref: string) {
    console.log('what did i get', ref);
    
    const [, id, dimensionString, format] = ref.split('-')
  
    if (!id || !dimensionString || !format) {
      throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "".`)
    }
  
    const [imgWidthStr, imgHeightStr] = dimensionString.split('x')
  
    const width = +imgWidthStr
    const height = +imgHeightStr
  
    const isValidAssetId = isFinite(width) && isFinite(height)

    if (!isValidAssetId) {
      throw new Error(`Malformed asset _ref '${ref}'. Expected an id like "".`)
    }
    const PROJECTID = process.env.PROJECTID;
    //temporary
    return `https://nakama.assets.watdoing.com/${id}-${width}x${height}.${format}`;
  }