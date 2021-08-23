import { AuthenticationParams } from "@/domain/usecases/authentication";
import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credentials-error";
import { UnexpectedError } from "@/domain/errors/unexpected-credentials-error";
import { AccountModel } from "@/domain/models/account-model";

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const { url } = this;
    const httpResponse = await this.httpPostClient.post({ url, body: params });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();
      case HttpStatusCode.ok:
        return Promise.resolve();
      default:
        throw new UnexpectedError();
    }
  }
}
