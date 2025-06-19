# smart-url-responsive-link

📱 Smartly shorten URLs on mobile screens. Automatically displays full links on desktop and short ones on small devices.

## 📦 Install

```bash
npm install smart-url-responsive-link
```

## 🚀 Usage

```tsx
import { SmartLink } from "smart-url-responsive-link";

<SmartLink url="https://example.com/very/long/path" />;
```

### Props

| Prop               | Type    | Default | Description                    |
| ------------------ | ------- | ------- | ------------------------------ |
| `url`              | string  | —       | URL to display                 |
| `maxLength`        | number  | `40`    | Max length before truncation   |
| `truncateOnMobile` | boolean | `true`  | Truncate only on small screens |
| `showIcon`         | boolean | `false` | Show external link icon (↗)    |

---

## 🧠 Utility

You can also use the truncate function directly:

```ts
import { truncateUrl } from "smart-url-responsive-link";

truncateUrl("https://example.com/very/long/link", 30);
// → example.com/very/long/lin...
```

---

## 🧪 Dev

```bash
npm run build
```

---

## ✅ Publish to NPM

```bash
npm login
npm publish --access public
```

[![NPM Version](https://img.shields.io/npm/v/smart-url-responsive-link.svg)](https://www.npmjs.com/package/smart-url-responsive-link)
[![License](https://img.shields.io/npm/l/smart-url-responsive-link.svg)](https://github.com/leobarbosamrs/smart-url-responsive-link/blob/main/LICENSE)
