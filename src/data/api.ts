import { env } from "~/utils/env";
// import { sleep } from "~/utils/sleep";

export async function api(path: string, init?: RequestInit) {
  // await sleep(2000);
  const response = await fetch(env.NEXT_PUBLIC_API_BASE_URL + path, init);

  if (!response.ok) {
    throw response;
  }

  return response;
}
