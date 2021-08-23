import { AuthenticationParams } from "@/domain/usecases/authentication";
import { HttpPostClient } from "@/data/protocols/http/http-post-client";

export class RemoteAuthentication {
  constructor(private readonly url: string, private readonly httpPostClient: HttpPostClient) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const { url } = this;
    await this.httpPostClient.post({ url, body: params });
  }
}
