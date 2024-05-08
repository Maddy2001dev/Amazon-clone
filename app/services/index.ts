interface getProductsI {
  id?: number;
  query?: { query: string; category: string | undefined };
}

export async function getProducts(props?: getProductsI) {
  const string = () => {
    if (props?.id !== undefined) return props.id;
    // if (props?.query) {
    //   return ``;
    // }
    return '';
  };

  const res = await fetch(
    `https://json-server-amazon.liara.run/products/${string()}`
  );

  const data = res.ok ? await res.json() : null;

  return { data, success: res.ok };
}
