interface PayPalNamespace {
  Buttons: (config: {
    createOrder: (data: any, actions: any) => Promise<string>;
    onApprove: (data: any, actions: any) => Promise<void>;
  }) => {
    render: (element: HTMLElement) => void;
  };
}

declare global {
  interface Window {
    paypal: PayPalNamespace;
  }
}