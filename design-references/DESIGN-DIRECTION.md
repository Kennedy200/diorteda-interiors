# Diorteda Interiors: design direction

Same look as the Chef A restaurant site (`Gigs/foodie`): clean, modern and bright, inspired by Google's product pages. Lots of white space, Google Sans, pill buttons, softly rounded pictures and tiles of unequal sizes, quick quiet motion.

## What changed for Diorteda

- **Accent:** the red of Diorteda's own logo instead of foodie's green. One accent, one warm-neutral surface, no pastel tints.
- **Logo:** set as live text, "Diorteda" with a red full stop, as in the shop's logo. It returns at full width in the footer.
- **Main action:** order on WhatsApp. Every WhatsApp button leads to a short form that opens WhatsApp with the order already written. Click to call sits beside it and fills in once there's a number.
- **The interactive piece:** "Where's it going?" on the home page. Pick a room and see which categories to start with.

## Colour

| Name | Hex | Use |
| --- | --- | --- |
| Ink | `#1F1F1F` | Headings and running text |
| Soft ink | `#57524F` | Supporting text |
| Brand red | `#A51C30` | Buttons, the full stop, one colour field per page |
| Brand dark | `#821325` | Hover, text on soft red |
| Brand soft | `#FBECED` | Active states, one tile |
| Surface | `#F3F3F1` | Footer, form, tiles |

## Motion

Inherited from foodie: CSS rise on load, a scroll-scrubbed hero picture (GSAP), line-by-line headings (SplitText), CSS scroll-driven reveals, Motion sliding pills, Lenis smooth scrolling. Everything respects `prefers-reduced-motion`. Headless browsers skip Lenis so screenshot tools can scroll.
