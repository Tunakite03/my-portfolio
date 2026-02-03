# CI/CD & Pre-commit Setup Guide

## 📦 Cài đặt Dependencies

```bash
npm install
```

## 🔧 Khởi tạo Husky (chỉ cần chạy 1 lần)

```bash
npm run prepare
```

Lệnh này sẽ:

- Tạo thư mục `.husky`
- Setup pre-commit hooks tự động

## 🚀 Available Scripts

### Development

```bash
npm run dev          # Chạy dev server
npm run build        # Build production
npm run preview      # Preview build
```

### Code Quality

```bash
npm run format       # Format code với Prettier
npm run format:check # Check formatting
npm run lint         # Lint code với ESLint
npm run lint:fix     # Fix lint issues tự động
npm run type-check   # Check TypeScript types
```

## 🎯 Pre-commit Hooks

Mỗi khi commit, tự động chạy:

1. ✅ ESLint fix các lỗi có thể
2. ✅ Prettier format code
3. ✅ Chỉ check các files đã staged

Nếu có lỗi không thể tự động fix, commit sẽ bị chặn.

## 🔄 CI/CD Pipeline (GitHub Actions)

### Workflow Triggers

- **Push** vào `main`, `master`, `develop`
- **Pull Request** vào `main`, `master`, `develop`

### Pipeline Stages

#### 1. Quality Checks

- Type checking (Astro Check)
- Prettier format check
- ESLint validation

#### 2. Build

- Build production bundle
- Upload artifacts để deploy

#### 3. Deploy (chỉ khi push vào main/master)

- Auto deploy lên Netlify
- Tạo preview cho PR

### Setup Netlify Deploy

Thêm secrets vào GitHub repository:

1. Vào: `Settings → Secrets and variables → Actions`
2. Thêm:
   - `NETLIFY_AUTH_TOKEN`: Lấy từ Netlify User Settings → Applications
   - `NETLIFY_SITE_ID`: Lấy từ Site Settings → Site details

## 📝 Configuration Files

- `.prettierrc` - Prettier config
- `eslint.config.js` - ESLint config
- `.husky/pre-commit` - Pre-commit hook
- `.github/workflows/ci.yml` - GitHub Actions workflow

## 🛠️ Customization

### Thay đổi Prettier rules

Edit `.prettierrc`:

```json
{
   "semi": true,
   "singleQuote": true,
   "tabWidth": 3
}
```

### Thay đổi ESLint rules

Edit `eslint.config.js`:

```javascript
rules: {
   // Thêm rules của bạn
}
```

### Thay đổi lint-staged

Edit `package.json` → `lint-staged`:

```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

## 🚨 Troubleshooting

### Pre-commit không chạy?

```bash
# Re-install husky
rm -rf .husky
npm run prepare
```

### Commit bị chặn?

```bash
# Skip hooks (không khuyến khích)
git commit --no-verify
```

### ESLint errors?

```bash
# Fix tự động
npm run lint:fix

# Hoặc fix thủ công theo error messages
```

## 💡 Tips

1. **Format on Save**: Enable trong VS Code để tự động format
2. **Run lint trước commit**: Tránh bị chặn bất ngờ
3. **Check CI status**: Trước khi merge PR
4. **Keep dependencies updated**: `npm outdated` để check

## 📚 Resources

- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Netlify Deploy](https://docs.netlify.com/site-deploys/create-deploys/)
