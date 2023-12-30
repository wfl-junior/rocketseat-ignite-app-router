import { env } from "~/utils/env";
// import { sleep } from "~/utils/sleep";

export async function api(path: string, init?: RequestInit) {
  // await sleep(2000);
  return fetch(env.NEXT_PUBLIC_API_BASE_URL + path, init);
}
