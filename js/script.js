const AFFILIATE_TAG = "davblog-21";

document.addEventListener('DOMContentLoaded', () => {

  document.getElementById('y').textContent=new Date().getFullYear();

  // Wire the main CTA + any other Amazon buttons/links on the page
  AmazonStore.enhanceAll({ tag: AFFILIATE_TAG });

  // If you added the optional grid above:
  AmazonStore.renderStoreGridAll({ tag: AFFILIATE_TAG });
});

