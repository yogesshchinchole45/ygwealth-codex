<?php
/**
 * Y&G Wealth theme setup.
 */

if (!defined('ABSPATH')) {
    exit;
}

function ygwealth_page_map() {
    return [
        'about' => 'About Us',
        'appointment' => 'Book Appointment',
        'blog' => 'Blog',
        'blog-detail' => 'Blog Detail',
        'calculators' => 'Calculators',
        'careers' => 'Careers',
        'contact' => 'Contact Us',
        'insurance' => 'Insurance',
        'login' => 'Login',
        'product-detail' => 'Product Detail',
        'products' => 'Products',
        'service-detail' => 'Service Detail',
        'services' => 'Services',
        'signup' => 'Sign Up',
        'team' => 'Team',
    ];
}

function ygwealth_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
}
add_action('after_setup_theme', 'ygwealth_setup');

function ygwealth_assets() {
    $theme_version = wp_get_theme()->get('Version');
    wp_enqueue_style('ygwealth-site', get_template_directory_uri() . '/assets/styles.css', [], $theme_version);
    wp_enqueue_script('ygwealth-site', get_template_directory_uri() . '/assets/main.js', [], $theme_version, true);

    $routes = ['index' => home_url('/')];
    foreach (ygwealth_page_map() as $slug => $title) {
        $routes[$slug] = home_url('/' . $slug . '/');
    }

    wp_localize_script('ygwealth-site', 'ygTheme', [
        'homeUrl' => home_url('/'),
        'assetBase' => get_template_directory_uri() . '/assets',
        'routes' => $routes,
    ]);
}
add_action('wp_enqueue_scripts', 'ygwealth_assets');

function ygwealth_activate() {
    $home = get_page_by_path('home');
    if (!$home) {
        $home_id = wp_insert_post([
            'post_title' => 'Home',
            'post_name' => 'home',
            'post_status' => 'publish',
            'post_type' => 'page',
            'post_content' => 'Y&G Financial Services Private Limited homepage.',
        ]);
    } else {
        $home_id = $home->ID;
    }

    foreach (ygwealth_page_map() as $slug => $title) {
        if (!get_page_by_path($slug)) {
            wp_insert_post([
                'post_title' => $title,
                'post_name' => $slug,
                'post_status' => 'publish',
                'post_type' => 'page',
                'post_content' => $title . ' page for Y&G Financial Services Private Limited.',
            ]);
        }
    }

    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_id);

    if (!get_option('permalink_structure')) {
        update_option('permalink_structure', '/%postname%/');
    }

    flush_rewrite_rules();
}
add_action('after_switch_theme', 'ygwealth_activate');

function ygwealth_description() {
    if (is_front_page()) {
        return 'Y&G Financial Services Private Limited offers investment advisory, wealth management, insurance, retirement planning, tax-saving solutions, and financial calculators for Indian investors.';
    }

    $title = wp_get_document_title();
    return $title . ' from Y&G Financial Services Private Limited. Simple, clear financial guidance for Indian investors, families, business owners, retirees, and HNIs.';
}
