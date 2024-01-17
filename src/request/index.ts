import { API } from './Wechat';

type Parameters<T> = T extends (...args: infer T) => any ? T : never;

export const api = API;

export function apiFn<P extends typeof API, T extends keyof typeof API>(url: T, ...args: Parameters<P[T]>): ReturnType<P[T]> {
  return (api[url] as any).apply(api, args)
}

