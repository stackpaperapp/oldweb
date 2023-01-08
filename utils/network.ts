const fetcher = (url: string) => fetch(url).then((res) => res.json());
const swrOptions = {
  revalidateOnFocus: false,
};

export { fetcher, swrOptions };
