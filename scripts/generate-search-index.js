import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the routes directory
const routesDir = path.join(__dirname, '../src/routes');

// Function to extract frontmatter and content from markdown
function parseMarkdown(content) {
	const frontmatterMatch = content.match(/^---\n(.*?)\n---\n(.*)/s);
	if (frontmatterMatch) {
		return {
			frontmatter: frontmatterMatch[1],
			content: frontmatterMatch[2]
		};
	}
	return { frontmatter: '', content };
}

// Function to convert file path to URL
function pathToUrl(filePath) {
	return filePath
		.replace(/\\/g, '/')
		.replace(/\+page\.md$/, '')
		.replace(/\/$/, '') || '/';
}

// Function to extract title from markdown content
function extractTitle(content) {
	const titleMatch = content.match(/^#\s+(.+)/m);
	return titleMatch ? titleMatch[1] : 'Untitled';
}

// Recursively scan directory for markdown files
function scanDirectory(dir, baseUrl = '') {
	const items = [];
	
	try {
		const entries = fs.readdirSync(dir, { withFileTypes: true });
		
		for (const entry of entries) {
			const fullPath = path.join(dir, entry.name);
			
			if (entry.isDirectory()) {
				// Recursively scan subdirectories
				const subItems = scanDirectory(fullPath, `${baseUrl}/${entry.name}`);
				items.push(...subItems);
			} else if (entry.name === '+page.md') {
				// Process markdown files
				const content = fs.readFileSync(fullPath, 'utf-8');
				const { content: markdownContent } = parseMarkdown(content);
				const title = extractTitle(markdownContent);
				const url = pathToUrl(baseUrl);
				
				items.push({
					title,
					url,
					content: markdownContent
				});
			}
		}
	} catch (error) {
		console.warn(`Could not scan directory ${dir}:`, error.message);
	}
	
	return items;
}

// Generate the search index
function generateSearchIndex() {
	console.log('Generating search index...');
	
	const contentIndex = scanDirectory(routesDir);
	
	// Generate the TypeScript file
	const tsContent = `// Auto-generated search index - do not edit manually
// Generated on ${new Date().toISOString()}

export interface SearchIndexItem {
	title: string;
	url: string;
	content: string;
}

export const contentIndex: SearchIndexItem[] = ${JSON.stringify(contentIndex, null, 2)};
`;
	
	// Write to the search utils file
	const outputPath = path.join(__dirname, '../src/lib/utils/search-index.ts');
	fs.writeFileSync(outputPath, tsContent, 'utf-8');
	
	console.log(`Search index generated with ${contentIndex.length} pages`);
	console.log('Written to:', outputPath);
}

// Run the generator
generateSearchIndex();
