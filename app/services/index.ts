interface getProductsI {
  id?: number;
  query?: string | undefined;
  category?: string | null;
}
export async function getProducts(props: getProductsI) {
  const query = props.query;
  const category = props.category ? props.category : 'All';

  const string = () => {
    if (props?.id !== undefined) return `/${props.id}`;

    if (query && category === 'All') {
      return `?name_like=${query}`;
    }
    if (query && category !== 'All') {
      return `?name_like=${query}&category=${category}`;
    }
    if (!query && category !== 'All') {
      return `?category=${category}`;
    }

    return '';
  };

  const res = await fetch(
    `https://json-server-amazon.liara.run/products${string()}`
  );

  const data = res.ok ? await res.json() : null;

  return { data, success: res.ok };
}
