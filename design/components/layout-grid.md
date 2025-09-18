# Layout Grid Specification

## Bootstrap Grid System
12-column responsive grid using flexbox

## Breakpoints
- **xs**: <576px (phones)
- **sm**: ≥576px (landscape phones)
- **md**: ≥768px (tablets)
- **lg**: ≥992px (desktops)
- **xl**: ≥1200px (large desktops)
- **xxl**: ≥1400px (larger desktops)

## Container Types
- `.container`: max-width at each breakpoint
- `.container-fluid`: full width at all breakpoints
- `.container-{breakpoint}`: fluid until breakpoint

## Column Classes
- `.col`: equal width columns
- `.col-{number}`: specific width (1-12)
- `.col-{breakpoint}-{number}`: responsive widths

## Usage
```html
<div class="container">
  <div class="row">
    <div class="col-md-8">Main content</div>
    <div class="col-md-4">Sidebar</div>
  </div>
</div>
```

## Design Tokens
- Container padding: `var(--space-lg)`
- Gutter width: `1.5rem` (24px)
- Max widths defined per breakpoint
