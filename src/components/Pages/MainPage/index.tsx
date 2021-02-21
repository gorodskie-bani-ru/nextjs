import React from 'react'

import Page from '../layout'

// import Link from 'next/link';

// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

// import CompaniesList from 'modules/Site/components/Pages/Companies/List';

// import TopicView from 'modules/Site/components/Pages/Topics/Topic/View';

// import Comment from 'modules/Site/components/Comments/Comment';

export default class MainPage extends Page {
  // constructor(props: any) {

  // 	super(props);

  // 	Object.assign(this.state, {
  // 	});
  // }

  // componentDidUpdate(prevProps, prevState, prevContext) {

  // 	const {
  // 		coords,
  // 	} = this.context;

  // 	const {
  // 		coords: prevCoords,
  // 	} = prevContext;

  // 	if (
  // 		(coords || prevCoords)
  // 		&& JSON.stringify(coords || "") != JSON.stringify(prevCoords || "")
  // 	) {

  // 		this.loadData();
  // 	}

  // 	super.componentDidUpdate && super.componentDidUpdate(prevProps, prevState, prevContext);

  // }

  // loadData() {

  // 	const {
  // 		coords,
  // 	} = this.context;

  // 	return super.loadData({
  // 		coords,
  // 	});

  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async loadServerData(provider: any, options: any = {}) {
    // const {
    // 	// ...debugOptions
    // } = options;

    const {
      // cities: citiesNull,
      coords,
      // page,
      // limit = 0,
      cities,
    } = options

    // Получаем список компаний
    const result = await provider({
      operationName: 'MainPage',
      variables: {
        resourcesCenter: coords,
        companiesCenter: coords,
        getTVs: true,
        getRatingsAvg: true,
        companiesLimit: 8,
        // page,
      },
    })
    // .catch(e => {
    // 	throw (e);
    // });

    if (result && result.data) {
      let title

      const city = cities && cities[0]

      if (city) {
        title = city.longtitle
      }

      title = title || 'Городские бани'

      Object.assign(result.data, {
        title,
      })
    }

    return result
  }

  render() {
    const {
      cities,
      companiesList,
      // recentCompaniesList,
      topics,
      commentsList,
    } = this.state

    const topic = topics && topics[0]

    // const {
    // 	total,
    // 	// ...companies
    // } = companiesList || {};

    // const {
    // 	total: recentCompaniesTotal,
    // 	// ...recentCompanies
    // } = recentCompaniesList || {};

    // let item;

    const content = []

    if (!companiesList || !companiesList.count || !cities || !cities.length) {
      content.push(
        <div
          key="defaultContent"
          // style={{
          // 	height: "100vh",
          // }}
        >
          <div className="preloader" />
        </div>
      )
    } else {
      // content.push(<CompaniesList
      // 	key="companiesList"
      // 	data={companies}
      // 	cities={cities}
      // />);

      // recentCompanies && recentCompanies.count && content.push(<div
      // 	key="recentCompaniesList"
      // >
      // 	<Typography
      // 		type="title"
      // 		style={{
      // 			marginTop: 30,
      // 			marginBottom: 20,
      // 		}}
      // 	>
      // 		Новые заведения
      // 	</Typography>

      // 	<CompaniesList
      // 		data={recentCompanies}
      // 		showCities={false}
      // 	/>
      // </div>);

      if (topic) {
        content.push(
          <div
            key="topic"
            style={{
              marginTop: 30,
            }}
          >
            {/* <Typography
						type="title"
						style={{
							marginBottom: -10,
						}}
					>
						Последняя публикация <small><Link
							to="/topics/"
							href="/topics/"
							title="Все публикации"
							className="text default"
						>
							Читать все
						</Link></small>
					</Typography> */}

            {/* <TopicView
						item={topic}
						reloadData={::this.reloadData}
						open={false}
					/> */}
          </div>
        )
      }

      if (commentsList) {
        const { object: comments } = commentsList

        comments &&
          comments.length &&
          content.push(
            <div
              key="comments"
              style={{
                marginTop: 30,
              }}
            >
              {/* <Typography
						type="title"
					>
						Последнии комментарии <small><Link
							to="/comments/"
							href="/comments/"
							title="Все комментарии"
							className="text default"
						>
							Читать все
						</Link></small>
					</Typography> */}

              <Grid container>
                {/* {comments.map(comment => {

							const {
								id,
							} = comment;

							return <Grid
								key={id}
								item
								xs={12}
								sm={6}
								lg={3}
							>
								<Comment
									item={comment}
									reloadData={::this.reloadData}
								open={false}
								showResourceLink={true}
							/>
						</Grid>

						})} */}
              </Grid>
            </div>
          )
      }
    }

    return (
      <div
        style={{
          width: '100%',
          // marginTop: 20,
        }}
      >
        {content}
      </div>
    )
  }
}
