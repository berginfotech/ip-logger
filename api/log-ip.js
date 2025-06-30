export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { ip } = req.body;
  const googleScriptURL = 'https://script.google.com/macros/s/AKfycbwlQQgYfnmthrtVRdC8iEwNehvVM4uCfo1qfdw18oy6nEmeWrP8FBgv5sLZLjDPni-cWA/exec';

  try {
    const response = await fetch(`${googleScriptURL}?ip=${ip}`, {
      method: 'POST',
    });

    const text = await response.text();
    return res.status(200).json({ message: text });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Logging failed' });
  }
}
