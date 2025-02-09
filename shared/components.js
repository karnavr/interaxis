// Load HTML components
async function loadComponent(componentName, targetId) {
    try {
        const response = await fetch(`/shared/components/${componentName}.html`);
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${componentName}:`, error);
    }
}

// Initialize all components when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'header');
    loadComponent('footer', 'footer');
});
