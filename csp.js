const SELF = quote("self");

const CSP = {
  regular: serialize([
    // By default only talk to same-origin
    ["default-src", SELF],
    // No plugins
    ["object-src", quote("none")],
    // Script from same-origin and inline-hashes.
    // If you need to add an external host for scripts you need to add an item like 'https://code.jquery.com/jquery-3.6.0.slim.min.js' to this list.
    ["script-src", SELF, /* Replaced by csp.js plugin */ "HASHES"],
    // Inline CSS is allowed.
    ["style-src", quote("unsafe-inline")],
    // Images may also come from data-URIs.
    ["img-src", SELF, "data:"],

    // To add new rules, add new array literals here or extend those above with
    // additional allowed elements.
    // Example for allowing YouTube iframe embeds
    // ['frame-src', 'https://www.youtube.com/embed/']
  ]),
};

// Quotes CSP "keywords" like `none` or `self`. This function does very little
// but reads better than the inlined contents because of the nested quotes.
function quote(str) {
  return `'${str}'`;
}

function serialize(csp) {
  return csp.map((src) => src.join(" ")).join(";");
}

module.exports = () => CSP;