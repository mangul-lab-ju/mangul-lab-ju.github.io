export function truncateText(text: string, maxWords: number = 35): string {
    if (!text) return '';
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    
    let truncated = words.slice(0, maxWords).join(' ');
    const lastPeriod = truncated.lastIndexOf('.');
    
    if (lastPeriod > 0) {
        // Cut at the last period (inclusive)
        truncated = truncated.substring(0, lastPeriod + 1);
        return truncated + ' ...';
    }
    
    return truncated + '...';
}
