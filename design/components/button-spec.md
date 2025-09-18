# Button Component Specification

## Variants
- **Primary**: `bg-primary`, white text, hover darkens
- **Secondary**: `btn-outline-primary`, border + text color, hover fills
- **Success**: `btn-success`, green theme
- **Danger**: `btn-danger`, red theme

## Sizes
- **Small**: `btn-sm`, compact padding
- **Default**: standard button size
- **Large**: `btn-lg`, larger padding

## States
- **Default**: normal appearance
- **Hover**: subtle color change
- **Active**: pressed state
- **Disabled**: `disabled` attribute, muted appearance

## Usage
```html
<button class="btn btn-primary">Primary Action</button>
<button class="btn btn-outline-secondary btn-sm">Secondary</button>
<button class="btn btn-lg btn-success">Large Success</button>
```

## Design Tokens
- Primary color: `var(--brand-500)`
- Border radius: `var(--radius-sm)`
- Padding: `var(--space-sm) var(--space-md)`
