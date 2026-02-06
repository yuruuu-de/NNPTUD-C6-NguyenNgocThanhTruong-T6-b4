export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type HttpClientOptions = {
  baseUrl: string;
};

export class HttpClient {
  constructor(private readonly opts: HttpClientOptions) {}

  async request<TResponse>(
    method: HttpMethod,
    path: string,
    body?: unknown
  ): Promise<TResponse> {
    const url = new URL(path, this.opts.baseUrl);

    const res = await fetch(url, {
      method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined
    });

    const text = await res.text();
    const json = text ? (JSON.parse(text) as unknown) : null;

    if (!res.ok) {
      const message =
        json && typeof json === "object" && "message" in json
          ? String((json as any).message)
          : `HTTP ${res.status}`;
      throw new Error(message);
    }

    return json as TResponse;
  }
}


