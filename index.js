<script src="https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key"></script>
<script>
grecaptcha.ready(function() {
    grecaptcha.execute('_reCAPTCHA_site_key_', {action: 'homepage'}).then(function(token) {
       ...
    });
});
</script>
  
  <script>
grecaptcha.ready(function() {
    grecaptcha.execute('reCAPTCHA_site_key', {action: 'https://impact-project.github.io/discord'});
});
</script>
