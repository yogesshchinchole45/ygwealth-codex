<?php
/**
 * Y&G Astra child theme.
 */

if (!defined('ABSPATH')) {
    exit;
}

define('YGWEALTH_EMAIL', 'info@ygwealth.in');
define('YGWEALTH_PORTFOLIO_URL', 'https://myportfolio.ygfinserv.in/');

function ygwealth_astra_assets() {
    $version = wp_get_theme()->get('Version');
    wp_enqueue_style('astra-parent-style', get_template_directory_uri() . '/style.css', [], $version);
    wp_enqueue_style('ygwealth-astra-style', get_stylesheet_directory_uri() . '/assets/yg-astra.css', ['astra-parent-style'], $version);
    wp_enqueue_script('ygwealth-astra-script', get_stylesheet_directory_uri() . '/assets/yg-astra.js', [], $version, true);
}
add_action('wp_enqueue_scripts', 'ygwealth_astra_assets', 20);

function ygwealth_shortcode_calculators() {
    return '<div data-yg-calculators></div>';
}
add_shortcode('yg_calculators', 'ygwealth_shortcode_calculators');

function ygwealth_products() {
    return [
        'aif' => ['AIF', 'Alternative Investment Funds offer access to specialized strategies for eligible investors who understand risk, lock-in, liquidity, and tax impact. They can support portfolio diversification beyond traditional products.'],
        'bonds' => ['Bonds', 'Bonds can help investors add fixed-income exposure, potential coupon income, and portfolio stability. Credit quality, interest-rate risk, liquidity, and tax treatment should be reviewed before investing.'],
        'critical-illness-insurance' => ['Critical Illness Insurance', 'Critical illness insurance pays a fixed benefit on diagnosis of listed serious illnesses. It can help manage treatment costs, income disruption, and family financial pressure during recovery.'],
        'equity' => ['Equity', 'Equity investments provide ownership in listed companies and can support long-term wealth creation. They suit investors with patience, research discipline, and the ability to handle market volatility.'],
        'etfs' => ['ETFs', 'Exchange-traded funds provide low-cost exposure to indices, sectors, commodities, or debt baskets. They are useful for transparent, rules-based portfolio allocation.'],
        'fixed-deposits' => ['Fixed Deposits', 'Fixed deposits are useful for predictable income, planned liquidity, and lower-volatility allocation. Investors should compare post-tax return, issuer quality, tenure, and premature withdrawal terms.'],
        'health-insurance' => ['Health Insurance', 'Health insurance helps protect savings from hospitalization and medical costs. Good cover should match family size, city cost, room rent, exclusions, waiting periods, and claim process.'],
        'life-insurance' => ['Life Insurance', 'Life insurance protects family income and liabilities if the earning member is no longer around. Term cover is usually the foundation for simple and cost-effective protection planning.'],
        'mutual-funds' => ['Mutual Funds', 'Mutual funds pool investor money and invest through professional fund managers across equity, debt, hybrid, index, and solution-oriented categories. SIP, STP, SWP, and lump sum routes can be used based on goals.'],
        'nps' => ['NPS', 'National Pension System is a long-term retirement product with equity and debt allocation options. It can support disciplined retirement saving with applicable tax benefits and withdrawal rules.'],
        'p2p' => ['P2P Lending', 'Peer-to-peer lending allows eligible investors to lend through regulated online platforms. It may offer income potential, but borrower default, platform risk, and liquidity must be understood.'],
        'personal-accident-insurance' => ['Personal Accident Insurance', 'Personal accident insurance supports the family in case of accidental death, disability, or income loss due to accident. It is a practical add-on to life and health cover.'],
        'pms' => ['PMS', 'Portfolio Management Services are meant for eligible investors seeking professionally managed, focused portfolios. Strategy, risk, fees, minimum investment, and reporting should be understood clearly.'],
        'sif' => ['SIF', 'Specialized Investment Funds are intended for advanced investment strategies subject to applicable availability and regulation. Suitability and risk understanding are essential.'],
        'sip-investments' => ['SIP Investments', 'Systematic Investment Plans help build disciplined monthly investing habits. SIPs can support goals such as education, home purchase, retirement, and long-term wealth creation.'],
        'vehicle-insurance' => ['Vehicle Insurance', 'Vehicle insurance protects against financial loss from accidents, third-party liability, theft, and damage. Coverage should be reviewed for IDV, add-ons, claim service, and exclusions.'],
    ];
}

function ygwealth_services() {
    return [
        'financial-coaching' => ['Financial Coaching', 'Financial coaching helps individuals and families improve day-to-day money decisions, budgeting, saving habits, debt control, and investment discipline.'],
        'financial-planning' => ['Financial Planning', 'Financial planning connects income, expenses, insurance, investments, tax, and goals into one clear roadmap. It helps you know what to do first and what to review regularly.'],
        'goal-based-planning' => ['Goal-based Planning', 'Goal-based planning maps each investment to a purpose such as education, home purchase, retirement, travel, or family security.'],
        'investment-advisory' => ['Investment Advisory', 'Investment advisory helps structure portfolios based on risk profile, time horizon, liquidity needs, and tax impact.'],
        'retirement-planning' => ['Retirement Planning', 'Retirement planning estimates future expenses and builds a corpus strategy so retirement income can be planned with more confidence.'],
        'tax-planning' => ['Tax Planning', 'Tax planning helps align eligible tax-saving options with real financial goals instead of making rushed year-end decisions.'],
        'wealth-management' => ['Wealth Management', 'Wealth management brings investments, protection, tax awareness, succession, liquidity, and family goals into a coordinated plan.'],
    ];
}

function ygwealth_block($content) {
    return $content;
}

function ygwealth_buttons($primary_text, $primary_url, $secondary_text = '', $secondary_url = '', $primary_target = '') {
    $target = $primary_target ? ' target="' . esc_attr($primary_target) . '" rel="noopener"' : '';
    $secondary = $secondary_text ? '<!-- wp:button {"className":"yg-outline"} --><div class="wp-block-button yg-outline"><a class="wp-block-button__link wp-element-button" href="' . esc_url($secondary_url) . '">' . esc_html($secondary_text) . '</a></div><!-- /wp:button -->' : '';
    return '<!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button {"className":"yg-button"} --><div class="wp-block-button yg-button"><a class="wp-block-button__link wp-element-button" href="' . esc_url($primary_url) . '"' . $target . '>' . esc_html($primary_text) . '</a></div><!-- /wp:button -->' . $secondary . '</div><!-- /wp:buttons -->';
}

function ygwealth_hero($title, $text, $eyebrow = 'Y&G Financial Services') {
    return '<!-- wp:group {"className":"yg-hero","layout":{"type":"constrained"}} --><div class="wp-block-group yg-hero"><!-- wp:paragraph {"className":"eyebrow"} --><p class="eyebrow">' . esc_html($eyebrow) . '</p><!-- /wp:paragraph --><!-- wp:heading {"level":1} --><h1 class="wp-block-heading">' . esc_html($title) . '</h1><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html($text) . '</p><!-- /wp:paragraph -->' . ygwealth_buttons('Book Appointment', '/appointment/', 'Explore Products', '/products/') . '</div><!-- /wp:group -->';
}

function ygwealth_card_columns($items) {
    $columns = '<!-- wp:columns -->' . "\n" . '<div class="wp-block-columns">';
    foreach ($items as $item) {
        $columns .= '<!-- wp:column --><div class="wp-block-column"><!-- wp:group {"className":"yg-card"} --><div class="wp-block-group yg-card"><!-- wp:heading {"level":3} --><h3 class="wp-block-heading">' . esc_html($item[0]) . '</h3><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html($item[1]) . '</p><!-- /wp:paragraph -->' . (!empty($item[2]) ? '<!-- wp:paragraph --><p><a href="' . esc_url($item[2]) . '">Explore details</a></p><!-- /wp:paragraph -->' : '') . '</div><!-- /wp:group --></div><!-- /wp:column -->';
    }
    return $columns . '</div><!-- /wp:columns -->';
}

function ygwealth_section($heading, $text, $inner, $soft = false) {
    $class = $soft ? 'yg-section yg-soft' : 'yg-section';
    return '<!-- wp:group {"className":"' . esc_attr($class) . '","layout":{"type":"constrained"}} --><div class="wp-block-group ' . esc_attr($class) . '"><!-- wp:heading --><h2 class="wp-block-heading">' . esc_html($heading) . '</h2><!-- /wp:heading --><!-- wp:paragraph --><p>' . esc_html($text) . '</p><!-- /wp:paragraph -->' . $inner . '</div><!-- /wp:group -->';
}

function ygwealth_home_content() {
    $cards = [
        ['Investment Products', 'Mutual funds, bonds, fixed deposits, equities, NPS, PMS, AIF, SIF and other products for different goals.', '/products/'],
        ['Financial Planning', 'A clear roadmap for income, spending, protection, investing, tax saving, and long-term goals.', '/services/financial-planning/'],
        ['Retirement Planning', 'Plan your retirement corpus, income needs, and investment route with simple numbers.', '/services/retirement-planning/'],
    ];
    $products = [
        ['Mutual Funds', 'Professionally managed schemes for short, medium, and long-term goals.', '/products/mutual-funds/'],
        ['Insurance', 'Life, health, vehicle, personal accident, and critical illness protection.', '/insurance/'],
        ['PMS / AIF', 'Advanced portfolio options for eligible investors and HNI families.', '/products/pms/'],
    ];
    return ygwealth_hero('Smart Financial Planning for a Secure Future', 'Investment, protection, and wealth creation solutions tailored for Indian investors.', 'Wealth management for modern India')
        . ygwealth_section('Financial decisions made clearer', 'Choose what you need and edit every section from the WordPress block editor.', ygwealth_card_columns($cards))
        . ygwealth_section('About Y&G Financial Services', 'Y&G Financial Services Private Limited helps Indian investors make informed choices across investments, protection, retirement, tax-saving, and wealth creation.', ygwealth_card_columns([
            ['Trusted Advisors', 'Clear guidance with a client-first planning approach.'],
            ['Personalized Planning', 'Recommendations based on your goals, family needs, time horizon, and risk comfort.'],
            ['Transparent Approach', 'Simple language, documented steps, and regular review discipline.'],
        ]), true)
        . ygwealth_section('Products at a glance', 'Major product categories are available as editable child pages under Products.', ygwealth_card_columns($products))
        . ygwealth_section('Calculators and planning tools', 'Use the built-in calculator shortcode page for SIP, lump sum, future value, and retirement estimates.', ygwealth_card_columns([
            ['SIP Calculator', 'Estimate monthly investment growth.', '/calculators/'],
            ['Lump Sum Calculator', 'Check how one-time investments may grow.', '/calculators/'],
            ['Retirement Calculator', 'Estimate future corpus from savings and monthly investing.', '/calculators/'],
        ]), true)
        . '<!-- wp:group {"className":"yg-cta"} --><div class="wp-block-group yg-cta"><!-- wp:heading --><h2 class="wp-block-heading">Talk to a Financial Expert Today</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Book a focused discussion on your goals, existing portfolio, and next best steps.</p><!-- /wp:paragraph -->' . ygwealth_buttons('Book Appointment', '/appointment/') . '</div><!-- /wp:group -->';
}

function ygwealth_simple_page($title, $intro, $cards = []) {
    return ygwealth_hero($title, $intro, 'Y&G Financial Services') . ($cards ? ygwealth_section('Key areas', 'Edit, reorder, or remove these blocks from the WordPress editor.', ygwealth_card_columns($cards)) : '');
}

function ygwealth_product_content($name, $description) {
    return ygwealth_hero($name, $description, 'Product guide')
        . ygwealth_section($name . ': overview', $description . ' A product should be selected only after checking your goal, time period, liquidity need, tax position, and risk comfort.', ygwealth_card_columns([
            ['Benefits', 'Can support financial planning when matched with the right objective and reviewed regularly.'],
            ['Who should consider it', 'Investors whose goal, time horizon, and risk profile match this product.'],
            ['Next step', 'Speak with Y&G Financial Services before taking action so suitability is checked clearly.', '/contact/'],
        ]), true)
        . '<!-- wp:group {"className":"yg-cta"} --><div class="wp-block-group yg-cta"><!-- wp:heading --><h2 class="wp-block-heading">Need help choosing?</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Share your need and our team will help you understand the next step.</p><!-- /wp:paragraph -->' . ygwealth_buttons('Enquire Now', '/contact/') . '</div><!-- /wp:group -->';
}

function ygwealth_service_content($name, $description) {
    return ygwealth_hero($name, $description, 'Service guide')
        . ygwealth_section('Problem to solution', $description . ' The process starts with understanding your current situation, then creating simple actions that can be reviewed over time.', ygwealth_card_columns([
            ['Problem', 'Most people have scattered decisions and no single view of progress.'],
            ['Solution', 'A structured plan connects goals, cash flow, protection, investing, and review.'],
            ['Process', 'Discovery, analysis, recommendation, implementation support, and periodic review.'],
        ]), true)
        . '<!-- wp:group {"className":"yg-cta"} --><div class="wp-block-group yg-cta"><!-- wp:heading --><h2 class="wp-block-heading">Book a consultation</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Discuss this service with a Y&G advisor.</p><!-- /wp:paragraph -->' . ygwealth_buttons('Book Appointment', '/appointment/') . '</div><!-- /wp:group -->';
}

function ygwealth_contact_content() {
    $form = '<!-- wp:html --><form class="yg-form" action="https://formsubmit.co/' . esc_attr(YGWEALTH_EMAIL) . '" method="POST"><input type="hidden" name="_subject" value="New contact enquiry from Y&G website"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><label>Name<input required name="name" autocomplete="name"></label><label>Email<input required type="email" name="email" autocomplete="email"></label><label>Phone<input required name="phone" autocomplete="tel"></label><label>Message<textarea required name="message" rows="5"></textarea></label><button type="submit">Submit Enquiry</button></form><!-- /wp:html -->';
    $office = '<!-- wp:group {"className":"yg-contact-card"} --><div class="wp-block-group yg-contact-card"><!-- wp:heading {"level":3} --><h3 class="wp-block-heading">Office</h3><!-- /wp:heading --><!-- wp:paragraph --><p>Y&G Financial Services Private Limited<br>Mahalunge, Pune, Maharashtra, India 411045.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p><strong>Phone:</strong> +91 9139110009<br><strong>Email:</strong> info@ygwealth.in<br><strong>Website:</strong> <a href="https://www.ygfinserv.com">www.ygfinserv.com</a></p><!-- /wp:paragraph --><!-- wp:html --><iframe title="Google Maps location" loading="lazy" style="width:100%;height:320px;border:0;border-radius:8px" src="https://www.google.com/maps?q=Mahalunge%20Pune%20Maharashtra%20411045&output=embed"></iframe><!-- /wp:html --></div><!-- /wp:group -->';
    return ygwealth_hero('Start a conversation about your financial goals.', 'Share your details and our team will get back to you for a focused discussion.', 'Contact us')
        . '<!-- wp:group {"className":"yg-section"} --><div class="wp-block-group yg-section"><!-- wp:columns --><div class="wp-block-columns"><!-- wp:column --><div class="wp-block-column">' . $form . '</div><!-- /wp:column --><!-- wp:column --><div class="wp-block-column">' . $office . '</div><!-- /wp:column --></div><!-- /wp:columns --></div><!-- /wp:group -->';
}

function ygwealth_appointment_content() {
    return ygwealth_hero('Choose a convenient consultation slot.', 'Select a suitable time for a discovery call with Y&G Financial Services Private Limited.', 'Book appointment')
        . '<!-- wp:group {"className":"yg-section"} --><div class="wp-block-group yg-section"><!-- wp:html --><div class="yg-tidycal"><div class="tidycal-embed" data-path="yandggroup/discovery-call-1jo7528"></div><script src="https://asset-tidycal.b-cdn.net/js/embed.js" async></script></div><!-- /wp:html --></div><!-- /wp:group -->';
}

function ygwealth_signup_content() {
    return '<!-- wp:group {"className":"yg-section","layout":{"type":"constrained"}} --><div class="wp-block-group yg-section"><!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Sign Up</h1><!-- /wp:heading --><!-- wp:paragraph --><p>Share your basic details and our team will connect with you.</p><!-- /wp:paragraph --><!-- wp:html --><form class="yg-form" action="https://formsubmit.co/' . esc_attr(YGWEALTH_EMAIL) . '" method="POST"><input type="hidden" name="_subject" value="New sign up request from Y&G website"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><label>Name<input required name="name" autocomplete="name"></label><label>Email<input required type="email" name="email" autocomplete="email"></label><label>Phone<input required name="phone" autocomplete="tel"></label><label>Planning Interest<select name="interest"><option>Investment Planning</option><option>Retirement Planning</option><option>Insurance Review</option><option>Tax Saving</option><option>Wealth Management</option></select></label><button type="submit">Create Account</button></form><!-- /wp:html --></div><!-- /wp:group -->';
}

function ygwealth_calculators_content() {
    return ygwealth_hero('Financial calculators for better planning.', 'Use simple calculators to estimate investment growth and retirement readiness.', 'Calculators')
        . '<!-- wp:group {"className":"yg-section"} --><div class="wp-block-group yg-section"><!-- wp:shortcode -->[yg_calculators]<!-- /wp:shortcode --></div><!-- /wp:group -->';
}

function ygwealth_login_content() {
    return '<!-- wp:group {"className":"yg-section","layout":{"type":"constrained"}} --><div class="wp-block-group yg-section"><!-- wp:heading {"level":1} --><h1 class="wp-block-heading">Portfolio Viewer</h1><!-- /wp:heading --><!-- wp:paragraph --><p>View your investment portfolio through the secure Y&G portfolio viewer.</p><!-- /wp:paragraph -->' . ygwealth_buttons('Open Portfolio Viewer', YGWEALTH_PORTFOLIO_URL, '', '', '_blank') . '</div><!-- /wp:group -->';
}

function ygwealth_create_page($title, $slug, $content, $parent_id = 0) {
    $existing = get_page_by_path($parent_id ? get_post_field('post_name', $parent_id) . '/' . $slug : $slug);
    if ($existing) {
        wp_update_post([
            'ID' => $existing->ID,
            'post_content' => $content,
            'post_parent' => $parent_id,
        ]);
        return $existing->ID;
    }
    return wp_insert_post([
        'post_title' => $title,
        'post_name' => $slug,
        'post_content' => $content,
        'post_type' => 'page',
        'post_status' => 'publish',
        'post_parent' => $parent_id,
    ]);
}

function ygwealth_setup_pages() {
    $home_id = ygwealth_create_page('Home', 'home', ygwealth_home_content());
    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_id);

    $about_id = ygwealth_create_page('About Us', 'about', ygwealth_simple_page('About Y&G Financial Services Private Limited', 'We help Indian investors make clear decisions across investments, protection, retirement, tax saving, and wealth creation.', [
        ['Mission', 'To make financial planning simple, practical, and goal focused.'],
        ['Vision', 'To become a trusted financial services partner for Indian families and business owners.'],
        ['Values', 'Transparency, discipline, suitability, and long-term relationships.'],
    ]));
    ygwealth_create_page('Team', 'team', ygwealth_simple_page('Meet Our Team', 'Leadership and advisor profiles can be edited here in Gutenberg.', [
        ['Leadership', 'Add founder and leadership profiles here.'],
        ['Advisors', 'Add advisor expertise, photos, and bios here.'],
        ['Support', 'Add client servicing and operations team details here.'],
    ]));

    $products_id = ygwealth_create_page('Products', 'products', ygwealth_simple_page('Financial products for different goals.', 'Explore investment and protection products. Every product is an editable WordPress child page.', [
        ['Investment Products', 'Mutual funds, SIPs, fixed deposits, bonds, equity, ETFs, PMS, AIF, SIF, P2P and NPS.'],
        ['Insurance Products', 'Life, health, vehicle, personal accident, and critical illness insurance.'],
        ['Suitability First', 'Choose products based on need, risk, liquidity, taxation, and time horizon.'],
    ]));
    foreach (ygwealth_products() as $slug => [$name, $description]) {
        ygwealth_create_page($name, $slug, ygwealth_product_content($name, $description), $products_id);
    }

    ygwealth_create_page('Insurance', 'insurance', ygwealth_simple_page('Insurance solutions for family and asset protection.', 'Review life, health, vehicle, personal accident, and critical illness cover in one place.', [
        ['Life Insurance', 'Protect family income and liabilities.', '/products/life-insurance/'],
        ['Health Insurance', 'Protect savings from medical costs.', '/products/health-insurance/'],
        ['Critical Illness', 'Support treatment and recovery needs.', '/products/critical-illness-insurance/'],
    ]));

    $services_id = ygwealth_create_page('Services', 'services', ygwealth_simple_page('Financial services with a clear process.', 'Our services help you move from scattered decisions to a practical financial roadmap.', [
        ['Planning', 'Connect goals, income, expenses, protection, and investing.'],
        ['Advisory', 'Review products and allocation with suitability in mind.'],
        ['Review', 'Track progress and adjust as life changes.'],
    ]));
    foreach (ygwealth_services() as $slug => [$name, $description]) {
        ygwealth_create_page($name, $slug, ygwealth_service_content($name, $description), $services_id);
    }

    ygwealth_create_page('Calculators', 'calculators', ygwealth_calculators_content());
    ygwealth_create_page('Contact Us', 'contact', ygwealth_contact_content());
    ygwealth_create_page('Book Appointment', 'appointment', ygwealth_appointment_content());
    ygwealth_create_page('Sign Up', 'signup', ygwealth_signup_content());
    ygwealth_create_page('Login', 'login', ygwealth_login_content());
    ygwealth_create_page('Careers', 'careers', ygwealth_simple_page('Careers at Y&G Financial Services', 'Add open roles, company culture, and application instructions here.', [
        ['Relationship Manager', 'Wealth products and client servicing.'],
        ['Operations Associate', 'Documentation, transaction support, and client coordination.'],
        ['Internships', 'Learning opportunities for finance and client service roles.'],
    ]));
    ygwealth_create_page('Blog', 'blog', ygwealth_simple_page('Financial learning made simple.', 'Publish articles from WordPress Posts, or edit this page with featured article blocks.', [
        ['SIP or Lump Sum', 'Explain investment routes in simple language.'],
        ['Health Insurance', 'Help families understand cover basics.'],
        ['Retirement Planning', 'Share simple retirement planning ideas.'],
    ]));

    ygwealth_create_menus();
    update_option('permalink_structure', '/%postname%/');
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'ygwealth_setup_pages');

function ygwealth_menu_item($menu_id, $title, $url, $parent = 0, $target = '') {
    return wp_update_nav_menu_item($menu_id, 0, [
        'menu-item-title' => $title,
        'menu-item-url' => $url,
        'menu-item-status' => 'publish',
        'menu-item-parent-id' => $parent,
        'menu-item-target' => $target,
    ]);
}

function ygwealth_create_menus() {
    $menu_name = 'Y&G Main Menu';
    $menu = wp_get_nav_menu_object($menu_name);
    $menu_id = $menu ? $menu->term_id : wp_create_nav_menu($menu_name);

    $items = wp_get_nav_menu_items($menu_id);
    if (!empty($items)) {
        foreach ($items as $item) {
            wp_delete_post($item->ID, true);
        }
    }

    ygwealth_menu_item($menu_id, 'Home', home_url('/'));
    ygwealth_menu_item($menu_id, 'About Us', home_url('/about/'));
    $products_parent = ygwealth_menu_item($menu_id, 'Products', home_url('/products/'));
    foreach (['aif', 'equity', 'fixed-deposits', 'mutual-funds', 'p2p', 'pms', 'sif'] as $slug) {
        [$name] = ygwealth_products()[$slug];
        ygwealth_menu_item($menu_id, $name, home_url('/products/' . $slug . '/'), $products_parent);
    }
    $insurance_parent = ygwealth_menu_item($menu_id, 'Insurance', home_url('/insurance/'), $products_parent);
    foreach (['critical-illness-insurance', 'health-insurance', 'life-insurance', 'personal-accident-insurance', 'vehicle-insurance'] as $slug) {
        [$name] = ygwealth_products()[$slug];
        ygwealth_menu_item($menu_id, $name, home_url('/products/' . $slug . '/'), $insurance_parent);
    }

    $services_parent = ygwealth_menu_item($menu_id, 'Services', home_url('/services/'));
    foreach (ygwealth_services() as $slug => [$name]) {
        ygwealth_menu_item($menu_id, $name, home_url('/services/' . $slug . '/'), $services_parent);
    }
    ygwealth_menu_item($menu_id, 'Calculators', home_url('/calculators/'));
    ygwealth_menu_item($menu_id, 'Blog', home_url('/blog/'));
    ygwealth_menu_item($menu_id, 'Careers', home_url('/careers/'));
    ygwealth_menu_item($menu_id, 'Contact Us', home_url('/contact/'));
    ygwealth_menu_item($menu_id, 'Login', YGWEALTH_PORTFOLIO_URL, 0, '_blank');
    ygwealth_menu_item($menu_id, 'Sign Up', home_url('/signup/'));
    ygwealth_menu_item($menu_id, 'Book Appointment', home_url('/appointment/'));

    $locations = get_theme_mod('nav_menu_locations', []);
    $locations['primary'] = $menu_id;
    set_theme_mod('nav_menu_locations', $locations);
}

function ygwealth_customize_astra() {
    set_theme_mod('custom_logo', ygwealth_upload_logo());
}
add_action('after_switch_theme', 'ygwealth_customize_astra', 20);

function ygwealth_upload_logo() {
    $existing = get_posts([
        'post_type' => 'attachment',
        'title' => 'Y&G Logo',
        'posts_per_page' => 1,
    ]);
    if ($existing) {
        return $existing[0]->ID;
    }

    $file = get_stylesheet_directory() . '/assets/yg-logo.png';
    if (!file_exists($file)) {
        return 0;
    }

    $upload = wp_upload_bits('yg-logo.png', null, file_get_contents($file));
    if (!empty($upload['error'])) {
        return 0;
    }

    $attachment_id = wp_insert_attachment([
        'post_mime_type' => 'image/png',
        'post_title' => 'Y&G Logo',
        'post_status' => 'inherit',
    ], $upload['file']);

    require_once ABSPATH . 'wp-admin/includes/image.php';
    wp_update_attachment_metadata($attachment_id, wp_generate_attachment_metadata($attachment_id, $upload['file']));
    return $attachment_id;
}
