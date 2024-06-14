export async function redirectToSpotifyAuthorise(
  clientId: string,
  scope: string,
  authorisationEndpoint: string,
  redirectUrl: string
) {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomValues = crypto.getRandomValues(new Uint8Array(64));
  const randomString = randomValues.reduce(
    (acc, x) => acc + possible[x % possible.length],
    ""
  );

  const code_verifier = randomString;
  const data = new TextEncoder().encode(code_verifier);
  const hashed = await crypto.subtle.digest("SHA-256", data);

  const code_challenge_base64 = btoa(
    String.fromCharCode(...new Uint8Array(hashed))
  )
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  window.localStorage.setItem("code_verifier", code_verifier);

  const authUrl = new URL(authorisationEndpoint);
  const params = {
    response_type: "code",
    client_id: clientId,
    scope: scope,
    code_challenge_method: "S256",
    code_challenge: code_challenge_base64,
    redirect_uri: redirectUrl,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString(); // Redirect the user to the authorization server for login
}

export async function getAccessToken(clientId: string, code: string) {
  const code_verifier: string | null = localStorage.getItem("code_verifier");
  console.log({ code_verifier, clientId, code });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:3000",
      code_verifier: code_verifier!,
    }),
  });

  return await response.json();
}

export async function fetchProfile(token: string): Promise<any> {
  // Is the token that is being got here the same as before
  // why is this returning unauthorised ?
  // looks like adding the scope to the url is working ??
  console.log({ token });
  const result = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${token}` },
  });

  let data = result.json().then((response) => console.log(response));

  return data;
}
