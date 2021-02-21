import { PureComponent } from 'react'

// import PropTypes from 'prop-types';

// import Grid from 'material-ui/Grid';

// import { Link } from 'react-router';

// import ReactCmsPage from 'react-cms/src/app/components/Page';

// import { CardContent } from 'material-ui/Card';

// const defaultProps = {}

// const {
// 	...contextTypes
// } = ReactCmsPage.contextTypes;

// Object.assign(contextTypes, {
// 	inited: PropTypes.bool.isRequired,
// 	document: PropTypes.object.isRequired,
// 	coords: PropTypes.object,
// 	appExports: PropTypes.object.isRequired,
// 	setPageTitle: PropTypes.func.isRequired,
// 	user: PropTypes.object.isRequired,
// 	updateItem: PropTypes.func.isRequired,
// 	saveItem: PropTypes.func.isRequired,
// 	CompaniesStore: PropTypes.object.isRequired,
// 	TopicsStore: PropTypes.object.isRequired,
// 	ResourcesStore: PropTypes.object.isRequired,
// 	CommentsStore: PropTypes.object.isRequired,
// 	UsersStore: PropTypes.object.isRequired,
// 	RatingsStore: PropTypes.object.isRequired,
// 	EditVersionsStore: PropTypes.object.isRequired,
// 	getCounters: PropTypes.func.isRequired,
// 	localQuery: PropTypes.func.isRequired,
// 	remoteQuery: PropTypes.func.isRequired,
// 	router: PropTypes.object.isRequired,
// 	location: PropTypes.object.isRequired,
// 	triggerGoal: PropTypes.func.isRequired,
// });

/**
 * @deprecated
 */
export default class Page extends PureComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  state: any = {}

  // static contextTypes = contextTypes;

  // componentWillMount() {

  // 	const {
  // 		CommentsStore,
  // 		RatingsStore,
  // 		TopicsStore,
  // 		ResourcesStore,
  // 		UsersStore,
  // 		EditVersionsStore,
  // 	} = this.context;

  // 	this.CommentsStoreListener = CommentsStore.getDispatcher().register(payload => {

  // 		this.onStoreUpdated(CommentsStore, payload);

  // 	});

  // 	this.RatingsStoreListener = RatingsStore.getDispatcher().register(payload => {

  // 		this.onStoreUpdated(RatingsStore, payload);

  // 	});

  // 	this.TopicsStoreListener = TopicsStore.getDispatcher().register(payload => {

  // 		this.onStoreUpdated(TopicsStore, payload);

  // 	});

  // 	this.ResourcesStoreListener = ResourcesStore.getDispatcher().register(payload => {

  // 		this.onStoreUpdated(ResourcesStore, payload);

  // 	});

  // 	this.UsersStoreListener = UsersStore.getDispatcher().register(payload => {

  // 		this.onStoreUpdated(UsersStore, payload);

  // 	});

  // 	this.EditVersionsListener = EditVersionsStore.getDispatcher().register(payload => {

  // 		this.onStoreUpdated(EditVersionsStore, payload);

  // 	});

  // 	super.componentWillMount();

  // }

  // componentWillUnmount() {

  // 	const {
  // 		CommentsStore,
  // 		RatingsStore,
  // 		TopicsStore,
  // 		ResourcesStore,
  // 		UsersStore,
  // 		EditVersionsStore,
  // 	} = this.context;

  // 	if (this.CommentsStoreListener) {

  // 		const dispatch = CommentsStore.getDispatcher();

  // 		dispatch._callbacks[this.CommentsStoreListener] && dispatch.unregister(this.CommentsStoreListener);

  // 		this.CommentsStoreListener = undefined;
  // 	}

  // 	if (this.RatingsStoreListener) {

  // 		const dispatch = RatingsStore.getDispatcher();

  // 		dispatch._callbacks[this.RatingsStoreListener] && dispatch.unregister(this.RatingsStoreListener);

  // 		this.RatingsStoreListener = undefined;
  // 	}

  // 	if (this.TopicsStoreListener) {

  // 		const dispatch = TopicsStore.getDispatcher();

  // 		dispatch._callbacks[this.TopicsStoreListener] && dispatch.unregister(this.TopicsStoreListener);

  // 		this.TopicsStoreListener = undefined;
  // 	}

  // 	if (this.ResourcesStoreListener) {

  // 		const dispatch = ResourcesStore.getDispatcher();

  // 		dispatch._callbacks[this.ResourcesStoreListener] && dispatch.unregister(this.ResourcesStoreListener);

  // 		this.ResourcesStoreListener = undefined;
  // 	}

  // 	if (this.UsersStoreListener) {

  // 		const dispatch = UsersStore.getDispatcher();

  // 		dispatch._callbacks[this.UsersStoreListener] && dispatch.unregister(this.UsersStoreListener);

  // 		this.UsersStoreListener = undefined;
  // 	}

  // 	if (this.EditVersionsListener) {

  // 		const dispatch = UsersStore.getDispatcher();

  // 		dispatch._callbacks[this.EditVersionsStore] && dispatch.unregister(this.EditVersionsListener);

  // 		this.EditVersionsListener = undefined;
  // 	}

  // 	super.componentWillUnmount();
  // }

  // componentDidUpdate(prevProps, prevState, prevContext) {

  // 	super.componentDidUpdate(prevProps, prevState, prevContext);
  // }

  // setPageTitle(title) {

  // }

  // render() {

  // 	return <>
  // 		Hello
  // 	</>
  // }
}
