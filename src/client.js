// sanity

import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "mvgm1an4",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-06-20"
});