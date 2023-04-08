import  createClient from '@sanity/client'


const dbToken = 'skhOrZib0Xa6yHMXZlcZvZBB9o9B1qySiFvMuedEpHEbem8XfTWYKngOeO9vBVxcJKtAX1EbPhDCnTvbSjAs4wp6ySgUCbnzqyeD0kPSptO4dtk6GbusqG7JcZKkhQACQL9OHJF5YhlSvKhD5vwVqEiVvmzElSjPVqyuvWDVhaDgRCm2ls0G'

 export const sanityClient = createClient({
    projectId: "jjfphosj",
    dataset: 'production',
    useCdn: false, 
    apiVersion: '2023-02-13'
  })

  ///
export default async function Handler(req, res) {
  switch (req.method) {
    case "POST":
      //this JSON arrives as a string,
      //so we turn it into a JS object with JSON.parse()
      const newWish= await JSON.parse(req.body);
      //then use the Sanity client to create a new todo do
      const wishes = req.body

      try {
        await sanityClient
          .create({
            _type: "wishes",
            text: wishes.name,
            image: wishes.image,
            description:wishes.description,
            source: wishes.source,
            link:wishes.link,
          })
          .then((res) => {
            console.log(`Todo was created, document ID is ${res._id}`);
          });
        res
          .status(200)
          .json({ msg: `Todo was created, document ID is ${res._id}` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }

      break;
  }
}
