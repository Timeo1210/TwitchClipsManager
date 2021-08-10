/* eslint-disable import/prefer-default-export */
export function customFetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      throw json.errors[0];
    }

    return json.data;
  };
}
