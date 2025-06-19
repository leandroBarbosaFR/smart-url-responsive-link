# smart-url-responsive-link

📱 Smartly shorten long URLs on mobile screens. Automatically shows full links on desktop and truncated links on smaller devices. Now with tooltip and clipboard support!

[![NPM Version](https://img.shields.io/npm/v/smart-url-responsive-link.svg)](https://www.npmjs.com/package/smart-url-responsive-link)
[![License](https://img.shields.io/npm/l/smart-url-responsive-link.svg)](https://github.com/leobarbosamrs/smart-url-responsive-link/blob/main/LICENSE)

---

## 📦 Install

```bash
npm install smart-url-responsive-link
```

## 🚀 Usage

```tsx
import { SmartLink } from "smart-url-responsive-link";

<SmartLink url="https://example.com/very/long/path" />;
```

---

## ⚙️ Props

| Prop               | Type      | Default | Description                                                               |
| ------------------ | --------- | ------- | ------------------------------------------------------------------------- |
| `url`              | `string`  | —       | The URL to display and optionally shorten                                 |
| `maxLength`        | `number`  | `40`    | Maximum number of characters before truncation                            |
| `truncateOnMobile` | `boolean` | `true`  | Only truncate the URL on small screens                                    |
| `tooltip`          | `boolean` | `false` | Show full URL on hover as a native `title` tooltip                        |
| `copyable`         | `boolean` | `false` | Show a Lucide clipboard icon to copy the full URL to the user's clipboard |
| `showIcon`         | `boolean` | `false` | Show a ↗ icon next to the link to indicate it's an external URL           |
| `className`        | `string`  | `""`    | Optional custom class for styling wrapper                                 |

---

## ✨ Example

```tsx
<SmartLink
  url="https://example.com/a/very/long/path/that/gets/truncated"
  tooltip
  copyable
  showIcon
/>
```

---

## 🧠 Utility Function

You can also import and use the utility function directly:

```ts
import { truncateUrl } from "smart-url-responsive-link";

truncateUrl("https://example.com/very/long/link", 30);
// → example.com/very/long/lin...
```

---

## 🧪 Dev Commands

```bash
npm install
npm run build
```

---

## ✅ Publish to NPM

```bash
npm login
npm publish --access public
```

1367 studio
