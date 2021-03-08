import { NextSeo } from 'next-seo'
import React, { useMemo } from 'react'
import Paper from 'src/components/ui/Paper'
import Title from 'src/components/ui/Title'
import { Page } from '../_App/interfaces'

const ContactsPage: Page = () => {
  return useMemo(() => {
    return (
      <>
        <NextSeo title="Контакты" />

        <Paper>
          <Title variant="h3">Укажаемые посетители,</Title>

          <p>
            Если Вы обнаружили на сайте ошибку, пожалуйста, сообщине нам на{' '}
            <a href="mailto:info@gorodskie-bani.ru">
              support@gorodskie-bani.ru
            </a>
          </p>

          <p>
            По вопросам размещения информации о Ваших заведениях и рекламы,
            обращайтесь на{' '}
            <a href="mailto:sales@gorodskie-bani.ru">sales@gorodskie-bani.ru</a>
          </p>

          <p>
            По всем другим вопросам обращайтесь на{' '}
            <a href="mailto:info@gorodskie-bani.ru">info@gorodskie-bani.ru</a>
          </p>
        </Paper>
      </>
    )
  }, [])
}

export default ContactsPage
