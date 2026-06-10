Y&G Wealth Astra + Gutenberg Package
====================================

What this is:
An Astra child theme that creates editable Gutenberg pages for the Y&G Financial
Services website. Install Astra first, then upload and activate this child theme.

Required:
1. Install the Astra theme from Appearance > Themes > Add New.
2. Install and activate Astra.
3. Upload this child theme ZIP from Appearance > Themes > Add New > Upload Theme.
4. Activate "Y&G Wealth Astra Child".

What activation does:
- Creates editable WordPress pages using Gutenberg block markup.
- Sets Home as the front page.
- Creates Products and Services parent pages.
- Creates editable child pages for products and services.
- Creates Contact, Appointment, Sign Up, Login, Blog, Careers, Team and Calculators pages.
- Creates a WordPress menu named "Y&G Main Menu".
- Sets clean permalinks to /%postname%/.
- Adds the Y&G logo as the site logo when possible.

Where to edit:
- Pages: WordPress Admin > Pages.
- Menus: Appearance > Menus, or Appearance > Editor > Navigation.
- Header and footer layout: Astra Customizer or Astra Site Builder options.
- Colors and spacing: Appearance > Theme File Editor > assets/yg-astra.css,
  or add CSS in Appearance > Customize > Additional CSS.
- Products and services after import: edit their normal WordPress pages.

Included integrations:
- TidyCal appointment embed: yandggroup/discovery-call-1jo7528.
- Contact and Sign Up forms submit to info@ygwealth.in through FormSubmit.
- Login menu opens https://myportfolio.ygfinserv.in/ in a new tab.
- Calculator page uses shortcode [yg_calculators].

Recommended plugins:
- Spectra for richer Gutenberg blocks.
- WPForms or Fluent Forms if you want dashboard-managed forms.
- Rank Math or Yoast SEO for SEO metadata.

Important:
The first FormSubmit submission may require email verification from info@ygwealth.in.
Open that email and confirm before relying on live enquiries.

If layout looks broken after upload:
1. Upload the latest ZIP again from Appearance > Themes > Add New > Upload Theme.
2. Activate another theme temporarily, then activate "Y&G Wealth Astra Child" again.
   This runs the menu/layout migration.
3. Go to Settings > Permalinks and click Save Changes.
4. Clear LiteSpeed/Hostinger cache and browser cache.

Version 1.0.1 fixes:
- Forces the correct Y&G menu into Astra header locations.
- Hides Astra's default page title above the Gutenberg hero.
- Makes imported Gutenberg sections full-width.
- Adds a Y&G footer and hides Astra's default powered-by footer.
