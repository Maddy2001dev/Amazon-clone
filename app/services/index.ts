// interface getProductsI {
//   id?: number;
//   searchParameters?: { query: string | undefined; category: string | null };
// }

interface getProductsI {
  id?: number;
  query?: string | undefined;
  category?: string | null;
}
export async function getProducts(props: getProductsI) {
  const query = props.query;
  const category = props.category;

  const string = () => {
    if (props?.id !== undefined) return `/${props.id}`;
    if (query && category) {
      return `?query=${query}&category=${category}`;
    }
    if (category) {
      return `?q=${category}`;
    }
    if (query) {
      return `?q=${query}`;
    }
    return '';
  };

  const res = await fetch(
    `https://json-server-amazon.liara.run/products${string()}`
  );

  const data = res.ok ? await res.json() : null;

  return { data, success: res.ok };
}
