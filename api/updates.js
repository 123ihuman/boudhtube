export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { version } = req.body;

    const latestVersion = '1.0.1';
    const updateUrl = 'https://github.com/123ihuman/boudhtube/releases/download/v1.0.1/dist.zip';

    if (version !== latestVersion) {
      return res.status(200).json({
        version: latestVersion,
        url: updateUrl
      });
    }
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
