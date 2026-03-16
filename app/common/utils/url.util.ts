export const normalizeBaseUrl = (value: string): string => value.replace(/\/+$/, '');

export const joinUrl = (baseUrl: string, pathName: string): string => {
  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  if (!pathName || pathName === '/') {
    return normalizedBaseUrl;
  }

  return `${normalizedBaseUrl}/${pathName.replace(/^\/+/, '')}`;
};
