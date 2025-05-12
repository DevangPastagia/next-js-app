export default async function docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  // Try this to know the reason for [...slug], if [[...slug]] means its an optional route
  // http://192.168.0.145:3000/docs/feature1/dev1/dev2/feature2

  // Now how to handle multiple segments like this

  const paramsData = (await new Promise((resolve) => resolve(params))) as {
    slug: string[];
  };

  if (paramsData.slug.length === 1) {
    return (
      <>
        <p>
          You are reading the document of
          <b> {paramsData.slug[0]}</b>
        </p>
      </>
    );
  } else if (paramsData.slug.length === 2) {
    return (
      <>
        <p>
          You are reading the article <b> {paramsData.slug[1]} </b> of document
          <b> {paramsData.slug[0]} </b>
        </p>
      </>
    );
  } else if (paramsData.slug.length === 3) {
    return (
      <>
        <h1>This is the reviews of article {paramsData.slug[1]}</h1>
        <p>
          <b>Reviews: </b>
          {paramsData.slug[2]}
        </p>
      </>
    );
  } else {
    return (
      <>
        <h1> You are reading the document of </h1>
        <h1>Docs home page</h1>
      </>
    );
  }
}
