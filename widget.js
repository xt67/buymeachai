/**
 * BuyMeAChai Widget
 * Add this to any website with just one line of code!
 * 
 * Usage:
 * <script src="https://xt67.github.io/buymeachai/widget.js" data-name="YourName" data-upi="your@upi"></script>
 */

(function() {
    // Get the script tag that loaded this widget
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];
    
    // Get configuration from data attributes
    const name = currentScript.getAttribute('data-name') || 'Someone';
    const upi = currentScript.getAttribute('data-upi') || '';
    const position = currentScript.getAttribute('data-position') || 'right'; // right, left, inline
    const color = currentScript.getAttribute('data-color') || '#FFDD00';
    
    if (!upi) {
        console.error('BuyMeAChai: Please provide data-upi attribute');
        return;
    }
    
    const supportUrl = `https://xt67.github.io/buymeachai/support.html?name=${encodeURIComponent(name)}&upi=${encodeURIComponent(upi)}`;
    
    // Create the button
    const button = document.createElement('a');
    button.href = supportUrl;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.innerHTML = `
        <svg width="180" height="50" viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="50" rx="8" fill="${color}"/>
            <text x="45" y="32" font-family="Arial, sans-serif" font-size="16" font-weight="600" fill="#1a1a1a">Buy me a chai</text>
            <text x="15" y="32" font-size="20">☕</text>
        </svg>
    `;
    
    // Style based on position
    if (position === 'right' || position === 'left') {
        button.style.cssText = `
            position: fixed;
            bottom: 20px;
            ${position}: 20px;
            z-index: 9999;
            text-decoration: none;
            transition: transform 0.2s ease;
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
        `;
        button.onmouseover = () => button.style.transform = 'scale(1.05)';
        button.onmouseout = () => button.style.transform = 'scale(1)';
        document.body.appendChild(button);
    } else {
        // Inline - insert where the script tag is
        button.style.cssText = `
            display: inline-block;
            text-decoration: none;
            transition: transform 0.2s ease;
        `;
        button.onmouseover = () => button.style.transform = 'scale(1.05)';
        button.onmouseout = () => button.style.transform = 'scale(1)';
        currentScript.parentNode.insertBefore(button, currentScript);
    }
})();
