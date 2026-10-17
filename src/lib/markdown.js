import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

const projectsDirectory = path.join(
  process.cwd(),
  'src',
  'content',
  'projects',
);

function parseProject(fileName, source) {
  const { data } = matter(source);
  const requiredFields = ['title', 'description'];

  for (const field of requiredFields) {
    if (typeof data[field] !== 'string' || data[field].trim() === '') {
      throw new Error(
        `Project "${fileName}" must include a non-empty "${field}" field.`,
      );
    }
  }

  const date =
    data.date instanceof Date
      ? data.date
      : typeof data.date === 'string'
        ? new Date(data.date)
        : null;
  if (!date || Number.isNaN(date.getTime())) {
    throw new Error(`Project "${fileName}" has an invalid date.`);
  }

  if (
    !Array.isArray(data.tags) ||
    data.tags.some((tag) => typeof tag !== 'string')
  ) {
    throw new Error(`Project "${fileName}" must include a list of string tags.`);
  }

  for (const field of ['githubLink', 'liveLink']) {
    if (data[field] != null && typeof data[field] !== 'string') {
      throw new Error(`Project "${fileName}" has an invalid "${field}" field.`);
    }
  }

  return {
    slug: path.basename(fileName, '.md'),
    title: data.title.trim(),
    description: data.description.trim(),
    date: date.toISOString(),
    tags: data.tags,
    githubLink: data.githubLink || null,
    liveLink: data.liveLink || null,
    category: data.category || 'DEVELOPMENT',
    accent: data.accent || 'cyan',
    mark: data.mark || null,
  };
}

export async function getProjects() {
  const fileNames = (await readdir(projectsDirectory))
    .filter((fileName) => fileName.endsWith('.md'))
    .sort();
  const projects = await Promise.all(
    fileNames.map(async (fileName) => {
      const source = await readFile(
        path.join(projectsDirectory, fileName),
        'utf8',
      );
      return parseProject(fileName, source);
    }),
  );

  return projects.sort((first, second) =>
    second.date.localeCompare(first.date),
  );
}
