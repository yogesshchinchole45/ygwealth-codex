<?php
if (!defined('ABSPATH')) {
    exit;
}

get_header();

$slug = get_post_field('post_name', get_queried_object_id());
$allowed = array_keys(ygwealth_page_map());

if (in_array($slug, $allowed, true) && locate_template('template-parts/' . $slug . '.php')) {
    get_template_part('template-parts/' . $slug);
} else {
    while (have_posts()) {
        the_post();
        echo '<main><section class="section content-section"><div class="article-copy">';
        the_content();
        echo '</div></section></main>';
    }
}

get_footer();
