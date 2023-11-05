import { env } from "~/utils/env";

export function api(path: string, init?: RequestInit) {
  return fetch(env.NEXT_PUBLIC_API_BASE_URL + path, init);
}
