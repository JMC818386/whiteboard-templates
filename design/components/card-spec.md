# Card Component Specification

## Structure
- **Container**: `.card` wrapper with border and shadow
- **Header**: `.card-header` (optional)
- **Body**: `.card-body` with padding
- **Footer**: `.card-footer` (optional)

## Variants
- **Basic**: Simple container with border
- **With Image**: `.card-img-top` for hero images
- **Horizontal**: `.card` with flex layout

## Usage
```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Card content goes here.</p>
    <a href="#" class="btn btn-primary">Action</a>
  </div>
</div>
```

## Design Tokens
- Background: `var(--neutral-0)`
- Border radius: `var(--radius-md)`
- Padding: `var(--space-lg)`
- Shadow: subtle box-shadow for depth
