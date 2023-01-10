const sanityClient = require('@sanity/client')
const TOKEN = process.env.TOKEN;

const client = sanityClient({
  projectId: '24jcy0ne',
  dataset: 'production',
  apiVersion: '2023-01-10', // use current UTC date - see "specifying API version"!
  token: TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})

console.log(client);

export default client