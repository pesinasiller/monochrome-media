import React from 'react'
import { withTranslation } from 'react-i18next'
import { useForm, ValidationError } from '@statickit/react'
import './ContactForm.scss'

const ContactForm = (props) => {
  const [state, handleSubmit] = useForm('contactForm')
  const { t } = props
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          type="name"
          name="name"
          placeholder={t('contact:name-placeholder')}
        />
        <br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
        />
        <br />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          placeholder={t('contact:message-placeholder')}
        />
        <br />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="contact-form_contact-info">
          <div className="contact-form_info">
            <a href="mailto:info@monochrome.media">
              info@monochrome.media
            </a>
            <br />
            {t('contact:phone')}
            <a href="tel:331040824">
              : 331040824
            </a>
          </div>
          <div className="contact-form_submit-button">
            <button type="submit" disabled={state.submitting}>
              {t('contact:submit')}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default withTranslation()(ContactForm)
