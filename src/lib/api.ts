import emailjs from '@emailjs/browser'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  )
  return { success: true, message: 'Message envoyé avec succès !' }
}
