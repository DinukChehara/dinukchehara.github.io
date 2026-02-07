# Configuration Guide

## Skills (`skills.json`)

Add your skills to `src/data/skills.json`:

```json
[
  {
    "id": "python",
    "name": "Python",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "level": 95
  }
]
```

| Field | Description |
|-------|-------------|
| id | Unique identifier |
| name | Display name |
| icon | URL to icon (use devicons or any image URL) |
| level | Skill level 0-100 |

### Finding Icons
- DevIcons: `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{name}-original.svg`
- Examples: python, java, javascript, typescript, react, nodejs, etc.

---

## Projects (`projects.json`)

Add your projects to `src/data/projects.json`:

```json
[
  {
    "id": "my-plugin",
    "title": "My Plugin",
    "description": "Short description here",
    "tags": ["Java", "Spigot"],
    "github": "https://github.com/username/repo",
    "featured": true
  }
]
```

| Field | Required | Description |
|-------|----------|-------------|
| id | Yes | Unique identifier |
| title | Yes | Project name |
| description | Yes | Short description (shown on card) |
| tags | No | Array of tech tags |
| github | No | GitHub repo URL (README will be fetched) |
| demo | No | Live demo URL |
| thumbnail | No | Image URL for card |
| featured | No | Set true to highlight |

### GitHub Integration
If you provide a `github` URL, the "More Info" button will show the repo's README.md content.
