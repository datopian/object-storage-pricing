export default {
  title: "Cloud Storage Pricing Portal",
  head: `
  <link rel="icon" href="portaljs.svg" type="image/svg+xml" sizes="32x32">
  <script>
    sessionStorage.setItem("observablehq-sidebar", "false");
  </script>
  <script type="module">
    import { inject } from 'https://esm.sh/@vercel/analytics@1.5.0';
    inject();
  </script>
  `,
  root: "src",
  style: "style.css",
  footer: 'Built with Observable Framework. Sources: comparethe.co.',
};
