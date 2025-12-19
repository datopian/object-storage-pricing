export default {
  title: "Cloud Storage Pricing Portal",
  head: `
  <link rel="icon" href="portaljs.svg" type="image/svg+xml">
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
  footer: 'Built with <a href="https://www.portaljs.com/" target="_blank" rel="noopener noreferrer">PortalJS</a> and Observable Framework.',
};
