interface Configuration {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const configuration: Configuration = {
  serviceId: String(import.meta.env.VITE_EMAIL_JS_SERVICE_ID),
  templateId: String(import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID),
  publicKey: String(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY),
};
