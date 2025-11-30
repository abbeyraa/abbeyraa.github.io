const GITHUB_USER = "abbeyraa";
const GITHUB_API = `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=5`;

async function loadGithubProjects() {
  const container = document.getElementById("github-list");

  try {
    const res = await fetch(GITHUB_API);
    const repos = await res.json();

    const filtered = repos.filter((r) => !r.fork && r.description);

    filtered.slice(0, 5).forEach((repo) => {
      const card = document.createElement("div");
      card.className = "github-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description}</p>

        <div class="gh-meta">
          <span>⭐ ${repo.stargazers_count}</span>
          <span>${repo.language || "Unknown"}</span>
        </div>

        <a href="${
          repo.html_url
        }" target="_blank" class="gh-link">View on GitHub</a>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = "<p>Failed to load GitHub projects.</p>";
  }
}

loadGithubProjects();
