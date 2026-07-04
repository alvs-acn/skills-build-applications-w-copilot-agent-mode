export function getApiBaseUrl(env: NodeJS.ProcessEnv = process.env): string {
  const githubRepository = env.GITHUB_REPOSITORY;
  const codespaceName = env.CODESPACE_NAME;

  if (githubRepository) {
    return `https://${githubRepository}-8000.app.github.dev`;
  }

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}
