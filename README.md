# wiki

All docs and how-to's about my apps in one place

## How to run
### Local

In `hugo.toml`:

```toml
# relativeURLs = false
```
Next:
```bash
hugo server
```

### On GitHub

In `hugo.toml`:

```toml
relativeURLs = false
```

Next:
```bash
hugo -d docs
```
Next push to GitHub