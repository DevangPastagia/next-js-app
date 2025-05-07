import { Metadata } from "next";

type props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: props): Promise<Metadata> => {
  const paramData = (await new Promise((resolve) =>
    setTimeout(() => resolve(params), 1000)
  )) as props["params"];

  const { id } = paramData;

  return {
    title: `Product ${id}`,
    description: `This is the product ${id} page`,
  };
};

export default async function detail({ params }: { params: { id: string } }) {
  const paramData = (await new Promise((resolve) => resolve(params))) as {
    id: string;
  };

  return (
    <>
      <h1>Product Detail page.</h1>
      <p>The product number is {paramData.id} </p>
    </>
  );
}
