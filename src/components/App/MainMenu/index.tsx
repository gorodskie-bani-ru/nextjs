import React, { PureComponent } from 'react'

// import PropTypes from 'prop-types'

import Link from 'next/link'

import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import LoginIcon from '@material-ui/icons/PermIdentity'
import AddIcon from '@material-ui/icons/Add'
// import AtentionIcon from 'material-ui-icons/ErrorOutline'

// import Avatar from 'modules/Site/components/fields/User/avatar.js'

// import WsProxy from 'modules/Site/components/WsProxy'

// import cookies from 'js-cookie'

import $ from 'jquery'

export default class MainMenu extends PureComponent {
  // static contextTypes = {
  //   user: PropTypes.object.isRequired,
  //   userActions: PropTypes.object.isRequired,
  //   coords: PropTypes.object.isRequired,
  //   CompaniesStore: PropTypes.object.isRequired,
  //   TopicsStore: PropTypes.object.isRequired,
  //   ResourcesStore: PropTypes.object.isRequired,
  //   CommentsStore: PropTypes.object.isRequired,
  //   UsersStore: PropTypes.object.isRequired,
  //   RatingsStore: PropTypes.object.isRequired,
  //   localQuery: PropTypes.func.isRequired,
  //   router: PropTypes.object.isRequired,
  //   triggerGoal: PropTypes.func.isRequired,
  //   document: PropTypes.object.isRequired,
  // }

  state: any

  constructor(props: any) {
    super(props)

    this.state = {
      ratingsOpened: false,
      citiesOpened: false,
      cities: [],
    }
  }

  // componentWillMount() {
  //   const { ResourcesStore } = this.context

  //   const cities = ResourcesStore.getState().toArray()

  //   Object.assign(this.state, {
  //     cities,
  //   })
  // }

  // componentDidMount() {
  //   const {
  //     CommentsStore,
  //     RatingsStore,
  //     TopicsStore,
  //     ResourcesStore,
  //     // document,
  //   } = this.context

  //   this.CommentsStoreListener = CommentsStore.getDispatcher().register(
  //     this.onStoreUpdate
  //   )

  //   this.RatingsStoreListener = RatingsStore.getDispatcher().register(
  //     this.onStoreUpdate
  //   )

  //   this.TopicsStoreListener = TopicsStore.getDispatcher().register(
  //     this.onStoreUpdate
  //   )

  //   this.ResourcesStoreListener = ResourcesStore.getDispatcher().register(
  //     this.onStoreUpdate
  //   )

  //   // let resourcesCenter;

  //   // const {
  //   //   geo,
  //   // } = document;

  //   // const {
  //   //   ll,
  //   // } = geo || {};

  //   // const {
  //   //   0: lat,
  //   //   1: lng,
  //   // } = ll || {};

  //   // if(lat && lng){
  //   //   resourcesCenter = {
  //   //     lat,
  //   //     lng,
  //   //   };
  //   // }

  //   // this.loadData();
  // }

  // componentDidUpdate(prevProps, prevState, prevContext) {
  //   const { coords } = this.context

  //   const { coords: prevCoords } = prevContext

  //   if (
  //     (coords || prevCoords) &&
  //     JSON.stringify(coords || '') != JSON.stringify(prevCoords || '')
  //   ) {
  //     this.loadData()
  //   }

  //   super.componentDidUpdate &&
  //     super.componentDidUpdate(prevProps, prevState, prevContext)
  // }

  // onStoreUpdate = (payload) => {
  //   switch (payload.type) {
  //     case 'SET_DATA':
  //       this.loadData()
  //       break

  //     default:
  //   }
  // }

  // loadData() {
  //   const { localQuery, coords } = this.context

  //   localQuery({
  //     operationName: 'MainMenuData',
  //     variables: {
  //       limit: 0,
  //       resourcesCenter: coords,
  //     },
  //   })
  //     .then((r: any) => {
  //       const { ratings, resources: cities } = r.data

  //       this.setState({
  //         ratings,
  //         cities,
  //       })
  //     })
  //     .catch((e) => {
  //       console.error(e)
  //     })
  // }

  addTopic() {
    const { localQuery } = this.context

    localQuery({
      operationName: 'addTopic',
    }).catch((e: Error) => {
      console.error(e)
    })
  }

  closeMenu() {
    $('#navbar-main').removeClass('in')
  }

  // triggerGoal(goal) {
  //   const { triggerGoal } = this.context

  //   triggerGoal(goal)
  // }

  render() {
    // const {
    //   coords,
    //   user: { user },
    //   userActions,
    // } = this.context

    const user: any = null
    const coords = null

    const userActions: any = {
      loginClicked: () => {
        // eslint-disable-next-line no-console
        console.log('loginClicked')
      },
      logout: () => {
        // eslint-disable-next-line no-console
        console.log('logout')
      },
    }

    const { username } = user || {}

    const { ratings, cities, ratingsOpened, citiesOpened } = this.state

    let baseUrl = '/'

    let coordsUrl = ''

    if (coords) {
      const { lat, lng, zoom } = coords

      if (lat && lng && zoom) {
        coordsUrl += '@' + [lat, lng, zoom].join(',')
        baseUrl += coordsUrl
      }
    }

    const citiesList: JSX.Element[] = []

    cities &&
      cities.map((city: any) => {
        const { id, name, coords, alias: uri } = city

        if (!coords) {
          return
        }

        const { lat, lng } = coords

        const link = `/${uri}@` + [lat, lng, 12].join(',')

        citiesList.push(
          <li key={id}>
            <Link href={link}>
              <a
                onClick={() => {
                  this.closeMenu()
                }}
              >
                {name}
              </a>
            </Link>
          </li>
        )
      })

    const ratingsList: JSX.Element[] = []

    ratings &&
      ratings.map((item: any) => {
        const { Type } = item

        if (!Type) {
          return
        }

        const { id, name, uri } = Type

        const link = `/${uri}`

        ratingsList.push(
          <li key={id}>
            <Link href={link}>
              <a
                onClick={() => {
                  this.closeMenu()
                }}
              >
                {name}
              </a>
            </Link>
          </li>
        )
      })

    const mainCity = cities && cities[0]

    return (
      <div
        // className="navbar navbar-default"
        className="navbar navbar-default navbar-fixed-top"
        style={{
          marginBottom: 0,
        }}
      >
        <div className="container">
          <div className="navbar-header">
            <Link href={baseUrl}>
              <a
                className="navbar-brand"
                title="Городские бани, главная страница"
              >
                <div className="logo">
                  <i className="str leaf leaf-l"></i>
                  <span className="str">Городские бани</span>
                </div>
              </a>
            </Link>
            <button
              className="navbar-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-main"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div
            id="navbar-main"
            className="collapse navbar-collapse navbar-right"
          >
            <ul
              className="nav navbar-nav flex align-center"
              style={{
                display: 'flex',
              }}
            >
              {/*<li>
                <a 
                  href="/" 
                  title="Все бани на карте" 
                  className="dropdown-toggle" 
                  data-toggle="dropdown"
                >На карте <i className="fa fa-angle-down"></i></a>
                <ul 
                  className="dropdown-menu"
                  style={{
                    display: citiesOpened ? 'block' : undefined,
                    maxHeight: "70vh",
                    overflow: "auto",
                  }}
                >

                  {citiesList}

                </ul>
              </li>*/}

              {(mainCity && citiesList && citiesList.length && (
                <li>
                  <a
                    href={`/city/${coordsUrl}`}
                    title="Бани в городах"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {mainCity.name} <i className="fa fa-angle-down"></i>
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{
                      display: citiesOpened ? 'block' : undefined,
                      maxHeight: '70vh',
                      overflow: 'auto',
                    }}
                  >
                    {citiesList}
                  </ul>
                </li>
              )) ||
                null}

              {(ratingsList && ratingsList.length && (
                <li>
                  <Link href="/ratings/">
                    <a
                      title="Рейтинги заведений"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Рейтинги <i className="fa fa-angle-down"></i>
                    </a>
                  </Link>
                  <ul
                    className="dropdown-menu"
                    style={{
                      display: ratingsOpened ? 'block' : undefined,
                    }}
                  >
                    {ratingsList}
                  </ul>
                </li>
              )) ||
                null}

              <li>
                <Link href="/topics/">
                  <a
                    title="Рейтинги заведений"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Публикации <i className="fa fa-angle-down"></i>
                  </a>
                </Link>
                <ul className="dropdown-menu">
                  <li className="first">
                    <Link href="/bani-otzivy/">
                      <a
                        title="Обзоры и отзывы"
                        onClick={() => {
                          this.closeMenu()
                        }}
                        style={{
                          paddingLeft: 25,
                          paddingRight: 25,
                        }}
                      >
                        Обзоры и отзывы
                      </a>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      // to="/topics/"
                      href="/topics/"
                    >
                      <a
                        title="Новости"
                        onClick={() => {
                          this.closeMenu()
                        }}
                        style={{
                          paddingLeft: 25,
                          paddingRight: 25,
                        }}
                      >
                        Новости
                      </a>
                    </Link>
                  </li>
                  {user ? (
                    <li className="">
                      <Link href="/topics/create/">
                        <a
                          title="Добавить публикацию"
                          rel="nofollow"
                          onClick={() => {
                            this.closeMenu()
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: 25,
                            paddingRight: 25,
                          }}
                        >
                          <IconButton
                            // accent
                            style={{
                              padding: 0,
                              margin: 0,
                              height: 24,
                              width: 24,
                              marginLeft: -25,
                            }}
                          >
                            <AddIcon />
                          </IconButton>
                          Добавить публикацию
                        </a>
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </li>

              <li className="last">
                <Link href="/contacts.html">
                  <a
                    title="Контакты"
                    onClick={() => {
                      this.closeMenu()
                    }}
                  >
                    Контакты
                  </a>
                </Link>
              </li>

              {user ? (
                <li className="dropdown">
                  <a
                    id="office"
                    href="javascript:;"
                    data-toggle="dropdown"
                    className="dropdown-toggle flex align-center"
                    style={{
                      display: 'flex',
                    }}
                  >
                    {/* <Avatar
                      user={user}
                      style={{
                        width: 20,
                        height: 20,
                        fontSize: '18px',
                      }}
                    /> */}
                    Avatar
                    <span className="caret"></span>
                  </a>
                  <ul aria-labelledby="office" className="dropdown-menu">
                    <li>
                      <Link href={`/profile/${username}`}>Профиль</Link>
                    </li>

                    <li className="divider"></li>
                    <li>
                      <a
                        href="javascript:;"
                        onClick={() => {
                          userActions.logout()
                        }}
                      >
                        <i className="glyphicon glyphicon-log-out"></i> Выйти
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  <a
                    href="javascript:;"
                    rel="nofollow"
                    onClick={() => {
                      userActions.loginClicked()
                    }}
                  >
                    <Grid container alignItems="center">
                      <LoginIcon
                        style={{
                          height: 16,
                          width: 16,
                        }}
                      />{' '}
                      Войти
                    </Grid>
                  </a>
                </li>
              )}
            </ul>

            {/* <WsProxy /> */}
          </div>
        </div>
      </div>
    )
  }
}
