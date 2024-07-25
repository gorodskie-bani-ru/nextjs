import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

// import PropTypes from 'prop-types'

import Link from 'next/link'

// import Grid from '@material-ui/core/Grid'
// import IconButton from '@material-ui/core/IconButton'
// import LoginIcon from '@material-ui/icons/PermIdentity'
// import AddIcon from '@material-ui/icons/Add'
// import AtentionIcon from 'material-ui-icons/ErrorOutline'

// import Avatar from 'modules/Site/components/fields/User/avatar.js'

// import WsProxy from 'modules/Site/components/WsProxy'

// import cookies from 'js-cookie'

import { AppContext } from 'src/pages/_App/Context'
import { MainMenuStyled } from './styles'

import logo from './img/bath-logo.png'

const MainMenu: React.FC = () => {
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

  // state: any

  // constructor(props: any) {
  //   super(props)

  //   this.state = {
  //     ratingsOpened: false,
  //     citiesOpened: false,
  //     cities: [],
  //   }
  // }

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

  // triggerGoal(goal) {
  //   const { triggerGoal } = this.context

  //   triggerGoal(goal)
  // }

  // render() {
  // const {
  //   coords,
  //   user: { user },
  //   userActions,
  // } = this.context

  // const addTopic = () => {
  //   const { localQuery } = this.context

  //   localQuery({
  //     operationName: 'addTopic',
  //   }).catch((e: Error) => {
  //     console.error(e)
  //   })
  // }

  // const closeMenu = useCallback(() => {
  //   $('#navbar-main').removeClass('in')
  // }, [])

  // const loginClicked = useCallback(() => {
  //   console.log('loginClicked')
  // }, [])

  // const logout = useCallback(() => {
  //   console.log('logout')
  // }, [])

  const context = useContext(AppContext)

  /**
   * Формируем список городов с сортировкой
   */
  const { cities, mainCity } = useMemo(() => {
    const cities = context?.appData?.cities ?? []

    const mainCity = cities[0]

    return {
      cities,
      mainCity,
    }
  }, [context?.appData?.cities])

  const baseUrl = '/'

  const citiesList = useMemo<JSX.Element | null>(() => {
    // const coords = null

    const coordsUrl = ''

    // if (coords) {
    //   const { lat, lng, zoom } = coords

    //   if (lat && lng && zoom) {
    //     coordsUrl += '@' + [lat, lng, zoom].join(',')
    //     baseUrl += coordsUrl
    //   }
    // }

    const citiesList: JSX.Element[] = []

    cities.map((city) => {
      const { id, pagetitle: name, coords, alias: uri } = city

      if (!coords) {
        return
      }

      const { lat, lng } = coords

      const link = `/${uri}@` + [lat, lng, 12].join(',')

      citiesList.push(
        <li key={id}>
          <Link href={link}>{name}</Link>
        </li>
      )
    })

    // return citiesList

    const citiesOpened = false

    return (
      (mainCity && citiesList && citiesList.length && (
        <li>
          <a
            href={`/city/${coordsUrl}`}
            title="Бани в городах"
            className="dropdown-toggle"
            data-toggle="dropdown"
          >
            {mainCity.pagetitle} <i className="fa fa-angle-down"></i>
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
      null
    )
  }, [cities, mainCity])

  // TODO Remove
  citiesList

  // const preventDefault = useCallback((event: React.MouseEvent) => {
  //   event.preventDefault()
  // }, [])

  const [opened, openedSetter] = useState(false)

  const toggleMenu = useCallback(() => {
    openedSetter(!opened)
  }, [opened])

  /**
   * Ивент на закрытие меню
   */
  useEffect(() => {
    if (!opened) {
      return
    }

    const closeEvent = () => {
      openedSetter(false)
    }

    window.document.addEventListener('click', closeEvent)

    return () => {
      window.document.removeEventListener('click', closeEvent)
    }
  }, [opened])

  return useMemo(() => {
    // const user = null

    // const { username } = user || {}

    // const username = null

    // const ratings = []
    // const cities = []
    // const ratingsOpened = false;

    // const ratingsList: JSX.Element[] = []

    // ratings &&
    //   ratings.map((item: any) => {
    //     const { Type } = item

    //     if (!Type) {
    //       return
    //     }

    //     const { id, name, uri } = Type

    //     const link = `/${uri}`

    //     ratingsList.push(
    //       <li key={id}>
    //         <Link href={link}>
    //           <a
    //             onClick={closeMenu}
    //           >
    //             {name}
    //           </a>
    //         </Link>
    //       </li>
    //     )
    //   })

    return (
      <MainMenuStyled
        // className="navbar navbar-default"
        // className="navbar navbar-default navbar-fixed-top"
        // style={{
        //   marginBottom: 0,
        //   borderRadius: 0,
        // }}
        $opened={opened}
      >
        {/* <div className="container"> */}

        <Link
          href={baseUrl}
          className="navbar-brand"
          title="Городские бани, главная страница"
        >
          <img src={logo.src} alt={'logo'} title="Городские бани" />
          <span className="str">Городские бани</span>
        </Link>

        {/* <div className="navbar-header">
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
        </div> */}

        <div className="separator" />

        <button className="navbar-toggle" type="button" onClick={toggleMenu}>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        {/* <div
        // className="collapse navbar-collapse navbar-right"
        > */}
        <ul
          id="navbar-main"
          // className="nav navbar-nav"
          // style={{
          //   display: 'flex',
          // }}
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

          {/* 
              // TODO Restore citiesList
              {citiesList} 
              */}

          {/* {(ratingsList && ratingsList.length && (
              <li>
                <Link href="/ratings">
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
              null} */}

          {/* <li>
                <Link href="/topics">
                  <a
                    title="Рейтинги заведений"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={preventDefault}
                  >
                    Публикации <i className="fa fa-angle-down"></i>
                  </a>
                </Link>
                <ul className="dropdown-menu">
                  <li className="first">
                    <Link href="/bani-otzivy">
                      <a
                        title="Обзоры и отзывы"
                        onClick={closeMenu}
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
                      // to="/topics"
                      href="/topics"
                    >
                      <a
                        title="Новости"
                        onClick={closeMenu}
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
                      <Link href="/topics/create">
                        <a
                          title="Добавить публикацию"
                          rel="nofollow"
                          onClick={closeMenu}
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
              </li> */}

          <li>
            <Link href="/bani-otzivy" title="Обзоры и отзывы">
              Обзоры и отзывы
            </Link>
          </li>
          <li>
            <Link href="/topics" title="Новости">
              Новости
            </Link>
          </li>

          <li className="last">
            <Link href="/contacts.html" title="Контакты">
              Контакты
            </Link>
          </li>

          {/* {user ? (
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
                    Avatar
                    <span className="caret"></span>
                  </a>
                  <ul aria-labelledby="office" className="dropdown-menu">
                    <li>
                      <Link href={`/profile/${username}`}>Профиль</Link>
                    </li>

                    <li className="divider"></li>
                    <li>
                      <a href="javascript:;" onClick={logout}>
                        <i className="glyphicon glyphicon-log-out"></i> Выйти
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li>
                  <a href="javascript:;" rel="nofollow" onClick={loginClicked}>
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
              )} */}
        </ul>

        {/* <WsProxy /> */}
        {/* </div> */}
        {/* </div> */}
      </MainMenuStyled>
    )
  }, [opened, toggleMenu])
  // }
}

export default MainMenu
