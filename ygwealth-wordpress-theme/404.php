<?php
if (!defined('ABSPATH')) {
    exit;
}
get_header();
?>
<main>
  <section class="page-hero">
    <p class="eyebrow">Page not found</p>
    <h1>We could not find this page</h1>
    <p>Please use the menu to continue, or book a consultation with Y&G Financial Services.</p>
    <a class="btn btn--gold" href="<?php echo esc_url(home_url('/')); ?>">Go Home</a>
  </section>
</main>
<?php
get_footer();
