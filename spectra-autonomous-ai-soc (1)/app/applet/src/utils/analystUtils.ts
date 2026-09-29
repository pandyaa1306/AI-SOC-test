/**
 * Utility functions for formatting analyst names and client labels
 */

export const getClientShortName = (client?: string): string => {
  if (!client) return '';
  const trimmed = client.trim();
  if (trimmed.toLowerCase().includes('all client')) return 'All Clients';
  // Extracts first word e.g. "AeroTech", "Nexus", "Apex", "Vanguard", "OmniCloud", "Starlight"
  const firstWord = trimmed.split(' ')[0];
  return firstWord || trimmed;
};

export const getAnalystDisplayName = (analyst: { name: string; client?: string } | null | undefined): string => {
  if (!analyst || !analyst.name) return '';
  const clientShort = getClientShortName(analyst.client);
  if (!clientShort) return analyst.name;
  if (analyst.name.includes(` - ${clientShort}`) || analyst.name.endsWith(` - ${clientShort}`)) {
    return analyst.name;
  }
  return `${analyst.name} - ${clientShort}`;
};
