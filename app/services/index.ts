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
  const category = props.category ? props.category : 'All';
  console.log(category);
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

    // if (query && category !== 'All') {
    //   return `?name_like=${query}&category=${category}`;
    // }
    // if (category) {
    //   return `?category=${props.category}`;
    // }
    // if (query) {
    //   return `?name_like=${props.query}`;
    // }
    return '';
  };

  // const string = () => {
  //   if (props?.id !== undefined) return `/${props.id}`;
  //   if (query && category) {
  //     return `?query=${query}&category=${category}`;
  //   }
  //   if (category) {
  //     return `?q=${category}`;
  //   }
  //   if (query) {
  //     return `?name_like=${query}`;
  //   }
  //   return '';
  // };

  const res = await fetch(
    `https://json-server-amazon.liara.run/products${string()}`
  );

  const data = res.ok ? await res.json() : null;

  return { data, success: res.ok };
}
