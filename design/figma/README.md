# Figma Integration

This directory contains information about the Figma design system integration.

## Figma File
Link to your Figma file: [Whiteboard Design System](https://www.figma.com/your-file-link)

## Variables & Tokens
- Color variables: brand (50, 100, 500, 700), neutral (0, 900)
- Typography: base size 16px, scale 1.125
- Spacing: xs(4), sm(8), md(12), lg(20), xl(32)
- Border radius: sm(6), md(12), lg(20)

## Components
- Button (Primary, Secondary, sizes)
- Input (text, number, validation states)
- Card (basic, with media)
- Navbar (responsive, collapsible)
- Modal (centered, backdrop)

## Export Process
1. Update variables in Figma
2. Export tokens to `tokens/tokens.json`
3. Update `tokens/css-variables.css`
4. Test in all frontend projects
