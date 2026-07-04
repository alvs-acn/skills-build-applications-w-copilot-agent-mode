export function getApiBaseUrl(env: NodeJS.ProcessEnv = process.env): string {
  const codespaceName = env.CODESPACE_NAME;

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}
