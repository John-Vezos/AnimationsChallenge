const fetchGET = async (url: string, signal: AbortSignal): Promise<any> => {
  const response = await fetch(url, { signal }).catch(error =>
    console.warn(error),
  );
  if (response === undefined) return -200;
  if (!response.ok) return -500;
  const data = (await response.json()) as Promise<any>;
  console.log(data);
  return data;
};

export default fetchGET;
