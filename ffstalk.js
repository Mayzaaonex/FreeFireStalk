// ffstalk.js
// Usage: node ffstalk.js <uid>

const axios = require('axios');

async function ffStalk(uid) {
  if (!uid) {
    return { success: false, error: 'UID tidak boleh kosong!' };
  }

  const url = `https://api.mayzaa.my.id/mayzaa/freefire/stalk?uid=${encodeURIComponent(uid)}`;

  try {
    const { data } = await axios.get(url, {
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'application/json'
      }
    });

    return data;
  } catch (err) {
    return {
      success: false,
      error: err.response
        ? `API Error [${err.response.status}]: ${err.response.statusText}`
        : `Request gagal: ${err.message}`
    };
  }
}

// ====== CLI Mode ======
if (require.main === module) {
  const uid = process.argv[2];

  (async () => {
    const result = await ffStalk(uid);
    console.log(JSON.stringify(result, null, 2));
  })();
}

module.exports = { ffStalk };
