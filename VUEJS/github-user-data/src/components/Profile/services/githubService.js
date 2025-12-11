export async function fetchGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

export async function fetchUserRepositories(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  return response.json();
}