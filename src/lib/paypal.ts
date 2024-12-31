export async function initializePayPal(amount: string) {
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  
  if (!clientId) {
    throw new Error('PayPal client ID is not configured');
  }

  // Load PayPal SDK
  const script = document.createElement('script');
  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
  script.async = true;

  return new Promise((resolve, reject) => {
    script.onload = () => resolve(window.paypal);
    script.onerror = () => reject(new Error('Failed to load PayPal SDK'));
    document.body.appendChild(script);
  });
}