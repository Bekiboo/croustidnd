// Search index structure and utilities
import { contentIndex } from './search-index.js';

export interface SearchResult {
	title: string;
	url: string;
	type: 'title' | 'subtitle' | 'content';
	excerpt: string;
	anchor?: string;
}

// Search function
export function search(query: string): SearchResult[] {
	if (!query.trim()) return [];
	
	const results: SearchResult[] = [];
	const queryLower = query.toLowerCase().trim();
	const queryWords = queryLower.split(/\s+/);
	
	contentIndex.forEach(page => {
		const title = page.title.toLowerCase();
		
		// Extract headings and their content
		const headingMatches = page.content.match(/#{1,6}\s+(.+)/g) || [];
		const headings = headingMatches.map(h => {
			const level = (h.match(/#/g) || []).length;
			const text = h.replace(/^#+\s+/, '');
			return { level, text, anchor: text.toLowerCase().replace(/[^a-z0-9]+/g, '-') };
		});
		
		// 1. Search in page title (highest priority)
		if (queryWords.every(word => title.includes(word))) {
			results.push({
				title: page.title,
				url: page.url,
				type: 'title',
				excerpt: page.title
			});
		}
		
		// 2. Search in headings (high priority)
		headings.forEach(heading => {
			if (queryWords.every(word => heading.text.toLowerCase().includes(word))) {
				results.push({
					title: `${page.title} - ${heading.text}`,
					url: page.url,
					type: 'subtitle',
					excerpt: heading.text,
					anchor: heading.anchor
				});
			}
		});
		
		// 3. Search in content (lower priority)
		const sentences = page.content.split(/[.!?]+/);
		sentences.forEach(sentence => {
			const sentenceLower = sentence.toLowerCase();
			if (queryWords.every(word => sentenceLower.includes(word))) {
				// Clean the sentence and create excerpt
				const cleaned = sentence
					.replace(/#{1,6}\s+/g, '') // Remove markdown headers
					.replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
					.replace(/\*(.*?)\*/g, '$1') // Remove italic markdown
					.replace(/`(.*?)`/g, '$1') // Remove code markdown
					.replace(/\s+/g, ' ') // Normalize whitespace
					.trim();
				
				if (cleaned.length > 20) { // Only include substantial content
					// Highlight the query words
					let highlighted = cleaned;
					queryWords.forEach(word => {
						const regex = new RegExp(`(${word})`, 'gi');
						highlighted = highlighted.replace(regex, '**$1**');
					});
					
					results.push({
						title: page.title,
						url: page.url,
						type: 'content',
						excerpt: highlighted.length > 150 ? highlighted.substring(0, 147) + '...' : highlighted
					});
				}
			}
		});
	});
	
	// Remove duplicates and limit results
	const uniqueResults = results.filter((result, index, self) => 
		index === self.findIndex(r => r.url === result.url && r.excerpt === result.excerpt)
	);
	
	// Sort by relevance: title matches first, then subtitles, then content
	const sortedResults = uniqueResults.sort((a, b) => {
		const typeOrder = { 'title': 0, 'subtitle': 1, 'content': 2 };
		return typeOrder[a.type] - typeOrder[b.type];
	});
	
	return sortedResults.slice(0, 10); // Limit to 10 results
}
