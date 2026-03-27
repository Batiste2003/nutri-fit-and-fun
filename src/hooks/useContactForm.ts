import { useState } from 'react'
import { submitContactForm, type ContactFormData } from '@/lib/api'

interface FormErrors {
  name?: string
  email?: string
  message?: string
  general?: string
}

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  function validate(): boolean {
    const newErrors: FormErrors = {}
    if (formData.name.trim().length < 2)
      newErrors.name = 'Le nom doit contenir au moins 2 caractères.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Veuillez entrer un email valide.'
    if (formData.message.trim().length < 10)
      newErrors.message = 'Le message doit contenir au moins 10 caractères.'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setIsSubmitting(true)
    try {
      await submitContactForm(formData)
      reset()
      setIsSuccess(true)
    } catch {
      setErrors({ general: 'Une erreur est survenue. Veuillez réessayer.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  function updateField(field: keyof ContactFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  function reset() {
    setIsSuccess(false)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  return { formData, errors, isSubmitting, isSuccess, handleSubmit, updateField, reset }
}
