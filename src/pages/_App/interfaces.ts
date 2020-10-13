import { NextPageContext } from 'next'
import { ApolloClientNormolized } from 'src/lib/interfaces'

/**
 * Расширенный контекст страниц приложения
 */
export interface NextPageContextCustom extends NextPageContext {
  /**
   * Аполло-клиент, чтобы в страницах и документе можно было
   * получить его в getInitialProps и вызвать запросы.
   * Надо именно так, чтобы иметь на выходе общий стейт клиента.
   */
  apolloClient: ApolloClientNormolized
}
