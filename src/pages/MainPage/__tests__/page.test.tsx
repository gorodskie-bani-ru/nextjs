import React from 'react'
import { appRender } from 'src/tests/utils'
import MainPage from '..'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
    }
  },
}))

describe('MainPage', () => {
  it('Render MainPage', () => {
    const tree = appRender(
      <MainPage
        city={{
          id: 1197,
          pagetitle: 'Москва',
          longtitle: 'Бани Москвы',
          coords: {
            lat: 55.752898,
            lng: 37.621908,
            zoom: 12,
          },
        }}
      />
    )

    // eslint-disable-next-line no-console
    // console.log('MainPage tree', tree.container.outerHTML);

    expect(tree.baseElement).toMatchSnapshot()
    expect(tree.container).toMatchSnapshot()
  })
})
