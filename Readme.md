# 🎯 Free Fire Stalker (ffstalk.js)

A simple Node.js script to fetch **Free Fire player information** by UID using the [Mayzaa API](https://api.mayzaa.my.id). Output is pure JSON — perfect for bots, automation, or backend integration.

---

## 📦 Dependencies

Before running this script, make sure you have the following installed:

| Dependency | Version   | Description                          |
|------------|-----------|--------------------------------------|
| Node.js    | >= 14.x   | JavaScript runtime                   |
| npm        | >= 6.x    | Node package manager                 |
| axios      | latest    | Promise-based HTTP client            |

Install the required dependency:

```bash
npm install axios
```

---

## 🚀 Usage

### 1. Clone / Download the script

Save the file as `ffstalk.js` in your project folder.

### 2. Run via CLI

```bash
node ffstalk.js <uid>
```

**Example:**

```bash
node ffstalk.js 10665134962
```

### 3. Use as a Module

```javascript
const { ffStalk } = require('./ffstalk.js');

(async () => {
  const data = await ffStalk('10665134962');
  console.log(JSON.stringify(data, null, 2));
})();
```

---

## 📤 Example Output

```json
{
  "success": true,
  "data": {
    "status": true,
    "uid": 10665134962,
    "name": "@youkn.owzaa",
    "region": "ID",
    "guild": {
      "id": 3093195096,
      "name": "LEMㅤKOREA"
    },
    "result_url": "https://api.mayzaa.my.id/downloads/5j6k51f8.jpg"
  }
}
```

### ❌ Error Output (still JSON)

```json
{
  "success": false,
  "error": "UID tidak boleh kosong!"
}
```

---

## 🖼️ Preview Result

Here's an example of the `result_url` image returned by the API:

![FF Stalk Preview](https://raw.githubusercontent.com/Mayzaaonex/Screenshoot-project/refs/heads/main/ffstalk.jpg)

---

## ⚙️ Features

- ✅ Fetch player info by UID
- ✅ Pure JSON output
- ✅ CLI & Module support
- ✅ Error handling (timeout, invalid UID, etc.)
- ✅ Lightweight & fast

---

## 📜 License

**© Mayzaa** — All rights reserved.

You are **free to**:
- ✅ Rename this project
- ✅ Modify the code
- ✅ Remove the credit / author name

You are **not allowed to**:
- ❌ Claim this API as your own
- ❌ Sell the API access as your own product

> Credit is appreciated but **not required**. Do whatever you want with the code — just don't claim the API belongs to you.

---

## 🔗 API Source

- **Endpoint:** `https://api.mayzaa.my.id/mayzaa/freefire/stalk?uid=<UID>`
- **Provider:** [Mayzaa](https://api.mayzaa.my.id)

---

## 💬 Support

If you find any bugs or need help, feel free to open an issue or contact the API provider directly.

**Happy stalking! 🎯**
