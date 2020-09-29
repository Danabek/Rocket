import Unsplash, { toJson } from "unsplash-js";

let unsplash;

export default async (_, res) => {
  if (!unsplash) {
    unsplash = new Unsplash({
      accessKey: "WY2IqVq9TraXZHSy5EuQA07khafhxtYdp3tz84w-kpY",
    });
  }

  //   const photos = await unsplash.users.photos();
  //   const  downloads  = await toJson(photos);

  //   return res.status(200).json({
  //     downloads: downloads,

  //   });

  unsplash.photos
    .listPhotos(2, 15, "latest")
    .then(toJson)
    .then((json) => {
      return res.status(200).json({json})
    });
};
