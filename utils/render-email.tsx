import { render } from '@react-email/render';

export const renderEmailTemplate = async (templateName: string, props?: any): Promise<string | null> => {
  try {
    const EmailComponentModule = await import(`../emails/${templateName}`);

    if (EmailComponentModule.default) {
        const EmailComponent = EmailComponentModule.default;
        return render(<EmailComponent {...props} />, {
            pretty: true,
        });
    } else {
        console.log('No default export found in the module');
    }

    return null;
  } catch (error) {
        console.error(`Error rendering email template: ${templateName}`, error);
        return null;
  }
};