/* eslint-disable react/jsx-no-bind */
import React, { useMemo } from 'react'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { CompanyViewProps } from './interfaces'
// import SchedulesList from './SchedulesList'
import GallerySlider from './GallerySlider'
import ItemMap from './ItemMap'
import { imageFormats } from 'src/helpers/imageFormats'
import { Card, CardHeader } from '@material-ui/core'
import AddressIcon from './icons/address'
import Site from './Site'
// import moment from 'moment'

const CompanyView: React.FC<CompanyViewProps> = ({ company: item }) => {
  return useMemo(() => {
    // const { documentActions, user } = this.context

    // const { user: currentUser } = user || {}

    // let {
    //   // company: item,
    //   tabIndex,
    // } = this.state

    // if (!item) {
    //   return null
    // }

    // let itemData = { ...item }
    const itemData = item

    // const {
    //   // galleryItem,
    //   // galleryExpanded,
    //   sending,
    //   diffs,
    // } = this.state

    // const newCommentForm = currentUser ? true : false

    // Перегружаем измененные данные
    // if (diffs && diffs.data) {
    //   Object.assign(itemData, diffs.data)
    // }

    const {
      // id,
      // id: companyId,
      pagetitle: name,
      // uri,
      // imageFormats: image,
      image,
      gallery,
      // TemplateVarValues: tvs,
      content: itemContent,
      // city,
      // createdon,
      // createdby,
      coords,

      // TODO: Fix comments
      // comments,

      // editedon,
      // editVersions,
      // schedule,
      // schedule_men,
      // schedule_women,
      // schedule_family,

      // prices,

      // _errors: errors,
      // _isDirty,
      // } = item;
      address,
      workTime,
    } = itemData

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let prices: Record<string, any> | undefined

    if (item.prices) {
      try {
        prices = JSON.parse(item.prices)
      } catch (error) {
        console.error(error)
      }
    }

    // const {
    //   metro,
    //   phones,
    //   site,
    //   // prices,
    //   approved,
    // } = tvs || {}

    // TODO Restore metro
    const metro = null

    // TODO Restore phones
    const phones = ''

    // TODO Restore site
    const site = ''

    // let schedules = [];

    // TODO Fix
    // const schedulesContent = <SchedulesList company={item} />

    // const inEditMode = _isDirty ? true : false
    const inEditMode = false

    let content

    // const canEdit = typeof window !== 'undefined'
    // const canEdit = false

    // const editDate = editedon || createdon

    const addresses: JSX.Element[] = []

    if (address) {
      addresses.push(<span key="address">{address}</span>)
    }

    // TODO Fix
    const Gallery =
      (gallery && gallery.length && (
        <CardContent
          style={{
            paddingBottom: 40,
          }}
        >
          <GallerySlider gallery={gallery} />
        </CardContent>
      )) ||
      null

    // Gallery = inEditMode
    //   ? null
    //   : (gallery && gallery.length && (
    //     <CardContent
    //       style={{
    //         paddingBottom: 40,
    //       }}
    //     >
    //       <GallerySlider gallery={gallery} />
    //     </CardContent>
    //   )) ||
    //   ''

    let itemMap

    // TODO Fix logic
    if (typeof window !== 'undefined' && (coords || inEditMode)) {
      itemMap = (
        <CardContent>
          <Paper
            style={{
              height: 400,
            }}
          >
            <ItemMap
              company={item}
              // updateItem={this.updateItem}
              // updateItem={updateItem}
              // showSearchControl={true}
              // onFocus={() => this.onFocus('coords')}
              // onChange={(item, data) => {
              //   this.clearErrors('coords')
              // }}
              // error={errors && errors.coords ? true : false}
              // helperText={(errors && errors.coords) || undefined}
              // helper={
              //   (inEditMode && (
              //     <Paper
              //       style={{
              //         padding: 15,
              //       }}
              //     >
              //       <p>
              //         Это поле позволяет точно указать координаты вашего
              //         заведения. Для этого просто переместите на карте маркер
              //         мышкой в нужную позицию.
              //       </p>

              //       <p>
              //         Если маркер находится не в том районе карты, где вам
              //         нужно, можете в этом поисковом поле набрать нужный вам
              //         адрес, после чего кликнуть подходящий предложенный вариант
              //         и маркер автоматически переместится в выбранный район.
              //       </p>

              //       <p>
              //         Смотрите видео как это работает: <br />
              //         <iframe
              //           width="560"
              //           height="315"
              //           src="https://www.youtube.com/embed/4V_GzUk0PTQ?rel=0&amp;showinfo=0"
              //           frameBorder="0"
              //           allowFullScreen
              //         ></iframe>
              //       </p>
              //     </Paper>
              //   )) ||
              //   undefined
              // }
            />
          </Paper>
        </CardContent>
      )
    }

    // TODO Fix edit Versions
    // let editVersionsList
    // if (
    //   editVersions &&
    //   editVersions.filter((n) => n.status === '0').length &&
    //   inEditMode
    // ) {
    //   editVersionsList = (
    //     <div>
    //       {diffs ? (
    //         <Button
    //           onClick={(event) => {
    //             this.setState({
    //               diffs: null,
    //             })
    //           }}
    //           raised
    //           accent
    //         >
    //           Отменить изменения и показать оригинал
    //         </Button>
    //       ) : null}

    //       {typeof window !== 'undefined' ? (
    //         <EditVersions
    //           companyId={companyId}
    //           // previewDiffs={::this.previewDiffs}
    //           // acceptDiffs={::this.acceptDiffs}
    //           diffs={diffs}
    //           activeOnly={true}
    //         />
    //       ) : null}
    //     </div>
    //   )
    // } else {
    //   editVersionsList = (
    //     <div>
    //       <Link
    //         to="/edits/"
    //         href="/edits/"
    //         rel="nofollow"
    //         className="flex align-center"
    //       >
    //         <ListIcon color="#F57C00" /> Лента изменений
    //       </Link>
    //     </div>
    //   )
    // }

    // const editDateInfo =
    //   (id > 0 && (
    //     <Grid
    //       item
    //       xs={12}
    //       style={{
    //         marginTop: 15,
    //       }}
    //     >
    //       <b>Дата последнего редактирования: </b>{' '}
    //       {editDate && moment(editDate * 1000).format('DD-MM-YYYY')}
    //       {editVersionsList}
    //     </Grid>
    //   )) ||
    //   null

    const mainInfo = (
      <CardContent key="mainInfo">
        <Paper
          style={{
            padding: 15,
          }}
        >
          <Grid
            container
            // gutter={0}
          >
            <Grid item>
              {image ? (
                <img
                  src={imageFormats(image, 'thumb')}
                  style={{
                    cursor: 'pointer',
                    marginRight: 10,
                    marginBottom: 10,
                  }}
                />
              ) : null}

              {/* {inEditMode ? (
                <div>
                  <ImagesUploader
                    label={
                      image ? 'Заменить изображение' : 'Загрузить изображение'
                    }
                    multiple={false}
                    dataName="file[]"
                    url="/assets/components/modxsite/connectors/connector.php?pub_action=images/upload"
                    optimisticPreviews
                    onLoadEnd={(err, response) => {
                      if (err && err.message) {
                        const { message } = err.response || {}

                        documentActions.addInformerMessage(
                          message || 'Ошибка загрузки файла'
                        )
                      } else {
                        const { 0: image } = response.object || {}

                        if (image && image.url) {
                          this.updateItem(item, {
                            image: image.url,
                            imageFormats: {
                              thumb: '/images/resized/thumb/' + image.url,
                            },
                          })

                          this.clearErrors('image')
                        }

                        return
                      }
                    }}
                  />

                  {errors && errors.image ? (
                    <p
                      style={{
                        color: 'red',
                      }}
                    >
                      {errors.image}
                    </p>
                  ) : null}
                </div>
              ) : null} */}
            </Grid>

            <Grid item xs={12} sm>
              {inEditMode ? //   value={address || ''} //   name="address" //   } //     (errors && errors.address) || 'Укажите подробный адрес' //   helperText={ //   error={errors && errors.address ? true : false} //   label="Адрес" // <TextField
              //   onChange={this.onChange}
              //   onFocus={() => this.onFocus('address')}
              // />
              null : addresses.length ? (
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  <AddressIcon />{' '}
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Адрес:
                  </span>{' '}
                  {addresses.reduce<React.ReactNode[]>(
                    (curr, next) => (curr.length ? [next] : [curr, ', ', next]),
                    []
                  )}
                </Grid>
              ) : (
                ''
              )}

              {inEditMode ? // /> //   onFocus={() => this.onFocus('metro')} //   onChange={this.onChange} //   value={metro || ''} //   name="metro" //   helperText="Укажите ближайшие станции метро через запятую" //   label="Метро" // <TextField
              null : metro ? ( // TODO Restore metro
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  {/* <MetroIcon />{' '} */}
                  {/* 
                    TODO Resotre icon
                  */}
                  MetroIcon
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Метро:
                  </span>{' '}
                  {metro}
                </Grid>
              ) : (
                ''
              )}

              {inEditMode ? // /> //   onFocus={() => this.onFocus('phones')} //   onChange={this.onChange} //   value={phones || ''} //   name="phones" //   helperText="Можно указать несколько телефонов через запятую" //   label="Телефон" // <TextField
              null : phones ? (
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  {/*
                  TODO Fix icon
                  <PhoneIcon /> */}
                  PhoneIcon{' '}
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Телефон:
                  </span>{' '}
                  {/* {phones
                    .split(/,|;/)
                    .map((n) => n && n.trim())
                    .filter((n) => n)
                    .map((phone) => {
                      return phone && phone.length > 8 ? (
                        <a href={`tel:${phone}`}>{phone}</a>
                      ) : (
                        phone
                      )
                    })
                    .reduce((a, b) => [a, ', ', b])} */}
                </Grid>
              ) : (
                ''
              )}

              {inEditMode ? //   onFocus={() => this.onFocus('site')} //   onChange={this.onChange} //   value={site || ''} //   name="site" //   helperText="Если адрес начинается с https, обязательно укажите вместе с ним, например, https://ваш_сайт/" //   label="Сайт" // <TextField
              // />
              null : site ? (
                <Grid
                  container
                  // gutter={0}
                  style={{
                    marginBottom: 10,
                  }}
                  alignItems="center"
                >
                  {/* 
                  TODO Restore icon */}
                  SiteIcon
                  {/* <SiteIcon />{' '} */}
                  <span
                    style={{
                      paddingLeft: 5,
                      paddingRight: 3,
                    }}
                  >
                    Сайт:
                  </span>{' '}
                  <Site
                    site={site}
                    // TODO Fix approved
                    approved={false}
                  />
                </Grid>
              ) : (
                ''
              )}

              {inEditMode ? null : workTime ? (
                // TODO Restore schedulesContent
                // || schedulesContent
                <div
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  {
                    // schedulesContent ? (
                    //   schedulesContent
                    // ) :
                    <Grid
                      container
                      // gutter={0}
                      style={{
                        marginBottom: workTime ? 10 : undefined,
                      }}
                    >
                      {/*
                            TODO Restore ClockIcon
                            <ClockIcon /> */}
                      ClockIcon{' '}
                      <span
                        style={{
                          paddingLeft: 5,
                          paddingRight: 3,
                        }}
                      >
                        Время работы
                      </span>
                    </Grid>
                  }

                  {(workTime && (
                    <div
                      style={{
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {workTime}
                    </div>
                  )) ||
                    null}
                </div>
              ) : (
                ''
              )}

              {inEditMode ? (
                <div>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: '12px',
                      color: 'rgba(0, 0, 0, 0.54)',
                      display: 'inline-block',
                      marginTop: 20,
                    }}
                  >
                    Цены
                  </span>

                  {/* 
                    TODO Restore Editor
                    */}
                  {/* <Editor
                    // label="Цены"
                    error={errors && errors.prices ? true : false}
                    helperText={
                      (errors && errors.prices) ||
                      'Распишите цены, включая цены на допуслуги'
                    }
                    name="prices"
                    value={prices || ''}
                    onChange={(event) => {
                      const { target } = event || {}

                      if (!target) {
                        return
                      }

                      const { name, value } = target

                      let { _isDirty } = item

                      _isDirty = _isDirty || {}

                      Object.assign(_isDirty, {
                        prices: value,
                      })

                      Object.assign(item, {
                        prices,
                        _isDirty,
                      })
                    }}
                    onFocus={() => this.onFocus('prices')}
                  /> */}
                </div>
              ) : prices ? (
                <div
                  style={{
                    overflow: 'hidden',
                  }}
                >
                  <Grid
                    container
                    // gutter={0}
                    alignItems="center"
                  >
                    {/* 
                      TODO Restore PriceIcon
                    <PriceIcon /> */}
                    PriceIcon{' '}
                    <span
                      style={{
                        paddingLeft: 5,
                        paddingRight: 3,
                      }}
                    >
                      Цены
                    </span>
                  </Grid>

                  {/* 
                    TODO Restore Editor
                  <Editor name="prices" value={prices || ''} readOnly /> 
                  */}
                </div>
              ) : null}
            </Grid>

            {/* {editDateInfo} */}
          </Grid>
        </Paper>
      </CardContent>
    )

    if (inEditMode) {
      // let tabContent
      // switch (tabIndex) {
      //   case 0:
      //     tabContent = mainInfo
      //     break
      //   case 1:
      //     tabContent = (
      //       <div
      //         style={{
      //           paddingTop: 20,
      //         }}
      //       >
      //         {schedulesContent}
      //         <div
      //           style={{
      //             paddingTop: 20,
      //           }}
      //         >
      //           <TextField
      //             label="Уточнение к графику работы"
      //             multiline
      //             error={errors && errors.workTime ? true : false}
      //             helperText={
      //               (errors && errors.workTime) ||
      //               'Например, время работы кассы'
      //             }
      //             name="workTime"
      //             value={workTime || ''}
      //             // multiline
      //             onChange={this.onChange}
      //             onFocus={() => this.onFocus('workTime')}
      //           />
      //         </div>
      //         <ScheduleEditor
      //           item={item}
      //         // onChange={::this.updateItem}
      //         // onFocus={::this.onFocus}
      //         />
      //       </div>
      //     )
      //     break
      //   case 2:
      //     tabContent = (
      //       <GalleryEditor
      //         classes={{}}
      //         item={item}
      //         onSelectContactImage={() => { }}
      //         // updateItem={::this.updateItem}
      //         style={{
      //           marginBottom: gallery && gallery.length ? 0 : 250,
      //         }}
      //       // onUpload={::this.onUpload}
      //       // updateItem={::this.updateItem}
      //       />
      //     )
      //     break
      // }
      // content = (
      //   <div>
      //     <CardContent>
      //       <Tabs
      //         index={tabIndex}
      //         onChange={this.handleTabIndexChange}
      //         textColor="accent"
      //         fullWidth
      //       >
      //         <Tab label="Основная информация" />
      //         <Tab label="График работы" />
      //         <Tab label="Галерея" />
      //       </Tabs>
      //     </CardContent>
      //     {tabContent}
      //   </div>
      // )
    } else {
      content = []

      content.push(mainInfo)
    }

    return (
      <Card
        style={{
          boxShadow: 'none',
        }}
      >
        {/* {id < 0 ? (
          <CardContent
            style={{
              display: 'flex',
            }}
          >
            <WarningIcon
              color="#F57C00"
              style={{
                height: 26,
                width: 26,
                flex: 'none',
                marginRight: 5,
              }}
            />{' '}
            <span
              style={{
                fontSize: '16px',
              }}
            >
              Размещение информации о банных заведениях на портале "Городские
              бани" бесплатное. Подробнее{' '}
              <Link
                to="/topics/obnovlennaya-versiya-portala-gorodskix-ban-1641.html"
                href="/topics/obnovlennaya-versiya-portala-gorodskix-ban-1641.html"
              >
                читайте здесь
              </Link>
            </span>
            .
          </CardContent>
        ) : null} */}

        <CardHeader
          title={
            <Grid container alignItems="center">
              <Grid item xs={12} sm>
                {inEditMode
                  ? // <TextField
                    //   label="Название заведения"
                    //   error={errors && errors.name ? true : false}
                    //   helperText={(errors && errors.name) || ''}
                    //   name="name"
                    //   value={name || ''}
                    //   onChange={this.onChange}
                    //   onFocus={() => this.onFocus('name')}
                    // />
                    null
                  : name}
              </Grid>

              {/* {_isDirty ? (
                <Grid item>
                  <IconButton
                    onClick={(event) => {
                      this.saveItem()
                    }}
                    disabled={sending}
                  >
                    <SaveIcon color="red" />
                  </IconButton>

                  {helper}
                </Grid>
              ) : canEdit ? (
                <Grid item>
                  <IconButton
                    onClick={(event) => {
                      this.updateItem(item, {})
                    }}
                  >
                    <EditIcon
                    // color="red"
                    />
                  </IconButton>

                  {helper}
                </Grid>
              ) : null} */}
            </Grid>
          }

          // TODO Restore RatingField
          // subheader={<RatingField item={item} />}
        />

        {content}

        {itemContent ? (
          <CardContent>
            <Paper
              style={{
                padding: 15,
              }}
              dangerouslySetInnerHTML={{ __html: itemContent }}
            />
          </CardContent>
        ) : null}

        {itemMap}

        {Gallery}

        {/* TODO Restore CompanyTopics */}
        {/* {(!inEditMode && <CompanyTopics item={item} />) || null} */}

        {/* TODO Restore comments */}
        {/* {!inEditMode && comments && comments.length ? (
          <CardContent>
            <Paper
              style={{
                padding: 15,
              }}
            >
              <Typography type="title">
                {comments.length} комментариев
              </Typography>

              <Comments
                comments={comments}
                resource={item}
                newCommentForm={newCommentForm}
                // onSuccess={::this.reloadData}
              />
            </Paper>
          </CardContent>
        ) : null} */}
      </Card>
    )
  }, [item])
}

export default CompanyView
