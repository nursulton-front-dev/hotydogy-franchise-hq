# HOTY DOGY Launchpad

@Lovable <system_role>
You are a 10x Staff Frontend Architect and Lead UX Motion Designer. 
Your core stack: React, Tailwind CSS (arbitrary values allowed), Framer Motion, TypeScript, Shadcn UI, Lucide React.
</system_role>

<project_soul>
Project: "HOTY DOGY" Franchise B2B Landing Page.
Vibe: High-energy, youthful, street-food culture, modern app-like experience. 
Mascot Reference: A fluffy, round orange hot-dog character wearing a bucket hat and sneakers doing peace signs and riding skateboards. The UI must reflect this playful, dynamic, and highly tactile energy.
ABSOLUTE BAN: Do NOT make it look like a boring, traditional corporate B2B website. It must feel like an interactive, premium Gen-Z food-tech app.
</project_soul>

<design_tokens>
You must strictly enforce these exact brand colors and typography.
- **Colors**:
  - `brand-orange`: `#FF6E00` (Primary brand color, backgrounds, hero elements)
  - `brand-yellow`: `#FFD000` (Logo, high-contrast highlights)
  - `brand-red`: `#F60019` (Primary CTA buttons, urgent tags)
  - `brand-lime`: `#9fce00` (Price tags, positive ROI numbers, checkmarks)
  - `brand-dark`: `#212620` (Main text color, dark mode cards)
  - `brand-light`: `#F9FAFB` (App background)
- **Typography**:
  - Headings (`h1`, `h2`, `h3`): `font-family: 'Bogart', 'Cooper Black', 'Fredoka One', system-ui;` (Heavy, soft, retro-bold). Use `font-black` tracking-tight.
  - Body: `font-family: 'Mulish', sans-serif;` (Clean, highly readable).
- **Geometry & UI Physics**:
  - Tags/Badges/Small Buttons: MUST be pill-shaped (`rounded-full`, `px-4`, `py-1`). Example: "Вкусный", "Острый", "23 000 сум".
  - Cards/Containers: Extreme rounding (`rounded-3xl` or `rounded-[2rem]`).
  - Shadows: Soft, diffuse spatial shadows (`shadow-xl shadow-brand-orange/10`).
</design_tokens>

<state_management>
Implement the following React states at the top level:
1. `const [lang, setLang] = useState<'ru'|'uz'>('ru')` - Header toggle.
2. `const [calcData, setCalcData] = useState({ traffic: 200, check: 45000 })` - For Block 10.
3. `const [isSubmitting, setIsSubmitting] = useState(false)` - Form state.
4. `const [showSuccess, setShowSuccess] = useState(false)` - Modal state.
</state_management>

<motion_choreography>
- **Scroll Reveal**: Wrap all major sections in `<motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}>`.
- **Micro-interactions**: All `button` and `a` tags must have `<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>`.
- **Staggering**: Grids (like Block 06 and Block 08) must use `variants` to stagger children appearance.
</motion_choreography>

<component_tree>
Build exactly these 16 blocks:

1. **HeaderNavigation**: Sticky `backdrop-blur-xl bg-white/80`. Logo (Yellow heavy text), Lang Toggle (Pill shaped), CTA.
2. **HeroSection**: Orange `#FF6E00` background. Massive Bogart H1. Floating pill-badges ("Вкусный", "Острый"). Mascot vibes. 
3. **MetricsRow**: Horizontal scrollable app-style cards: "6 филиалов", "4+ года опыта", "1400+ заказов/день".
4. **AppTraction**: Show off mobile app success (+82% growth, 22k downloads) using Lime `#9fce00` highlights.
5. **BrandTimeline**: Vertical connected dots showing history (Idea -> 1st Store -> App -> Network).
6. **FounderQuote**: Dark card (`#212620`) with white text. Shokhrukh's quote. Link to Spot.uz.
7. **WhyUsGrid**: 6 feature cards. Icons inside colorful circles (Orange, Yellow, Red, Lime).
8. **AudienceTabs**: Shadcn Tabs. Pill-shaped triggers. Content for: Новичкам, Инвесторам, Опытным.
9. **FranchisePackage**: 10-item list. Use `<CheckCircle2 color="#9fce00" />`.
10. **FormatsPricing**: 3 tier cards (Kiosk, Food Court, Express) with heavy `rounded-3xl` borders.
11. **ROICalculator**: Interactive component. Sliders for `traffic` and `check`. Real-time output of profit using huge Bogart font in Lime color.
12. **LocationsGallery**: Carousel of branch photos.
13. **LaunchStepper**: 8-step visual roadmap (Application -> Launch).
14. **SupportGrid**: Post-launch support features (Marketing, IT, Supply).
15. **LeadGenForm**: Massive white card. Inputs for Name, Phone, City. Pass `lang` state silently. Submit button must be massive, Red (`#F60019`), and pulsing.
16. **SuccessModal**: AnimatePresence modal. Triggered by form submit. Shows "Презентация отправлена" and a download button.
</component_tree>

<strict_execution_rules>
1. DO NOT output partial code. Give me the fully functional, styled, and animated React component.
2. Form submission MUST simulate a 1.5s network request (`Promise`), show a loading spinner, then trigger the Success Modal. 
3. The UI must feel tactile, bold, and heavily rely on the specified HEX colors. Use white space generously to balance the heavy colors.
4. Replace missing images with beautiful colored placeholders matching the brand palette.
BEGIN GENERATING COMPLETE CODE NOW.
</strict_execution_rules>

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/91305c7a-a072-491b-b12a-b664787fec86).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
