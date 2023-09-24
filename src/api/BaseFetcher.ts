abstract class BaseFetcher {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    console.log('BaseFetcher constructor ');
    
  }

  protected async fetchWrapper(
    endpoint: string,
    method: string = "GET",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any,
    headers: HeadersInit = { "Content-Type": "application/json" }
  ) {
    console.log('fetchWrapper');
    
    const options: RequestInit = {
      method,
      headers,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }

    return response.json();
  }
}

export default BaseFetcher;
