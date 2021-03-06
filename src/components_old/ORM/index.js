import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLBoolean,
} from 'graphql'

import GraphQLJSON from 'graphql-type-json'

import SiteContentType, {
  SiteContentArgs,
} from 'react-cms/src/app/components/ORM/SiteContent'

import { List } from 'immutable'

import {
  listField,
  listArgs,
  order,
  coordsFields,
  // ObjectsListType,
} from './fields'

// import type from 'graphql';

// import {
//   GraphQLField,
// } from 'graphql/type/';

// export class ModelObject{

//   constructor(props){

//     Object.assign(this, props);

//   }

//   fieldResolver(source, args, context, info) {

//     const {
//       fieldName,
//     } = info;

//     return source && source[fieldName] || undefined;

//   }

// }

import {
  CompanyType,
  // getMany as getCompanies,
  // getOne as getCompany,
} from './Company'

import {
  RatingType,
  // RatingArgs,
  RatingsListField,
  getMany as getRatings,
  getOne as getRating,
} from './Rating'

import { CommentType } from './Comment'

import { UserType } from './User'

import { ResourceType } from './Resource'

import WsConnectionType from './WsConnection'

import RedirectType from './Redirect'

import { SearchResultType } from './Search'

// import SiteContentType from './SiteContent';

import { SearchStatType } from './SearchStat'

import EditVersionType from './EditVersion'

// export class SchemaObject extends GraphQLObjectType{

//   constructor(props){

//     props = Object.assign({
//     }, props);

//     super(Props);
//   }
// }

// const CompanyType = new GraphQLObjectType({
//   name: 'Company',
//   fields: {
//     id: {
//       type: GraphQLInt,
//     },
//     name: {
//       type: GraphQLString,
//     },
//   },
// });

// const CommentType = new GraphQLObjectType({
//   name: 'Comment',
//   fields: {
//     id: {
//       type: GraphQLInt,
//     },
//     name: {
//       type: GraphQLString,
//     },
//   },
// });

// const RatingArgs = {
//   type: {
//     type: GraphQLID,
//   },
//   groupBy: {
//     type : RatingGroupbyEnum,
//   },
// };

const RatingGroupbyEnumList = {
  name: 'RatingGroupbyEnum',
  description: '???????????? ?????????????????????? ??????????????????',
  values: {
    company: {
      value: 'company',
      description: '?????????????????????????? ???? ?????????????????? (?????????? ??????????????)',
    },
    rating_type: {
      value: 'rating_type',
      description:
        '?????????????????????????? ???? ?????????? ?????????????????? (???? ?????????? ?????????????????? ?????????????? ?????????????? ?????????? ?? ???? ???????????????????? ????????????????)',
    },
    company_and_rating_type: {
      value: 'company_and_rating_type',
      description:
        '?????????????????????????? ???? ?????????????????? ?? ?????????? ?????????????????? (?????????????? ???????? ???? ???????????? ???????????????? ???? ???????? ????????????????)',
    },
    // rating_type_and_company: {
    //   value: 'rating_type_and_company',
    //   description : '?????????????????????????? ???? ?????????????????? ?? ?????????? ?????????????????? ?? ??????'
    // },
  },
}

const RatingGroupbyEnum = new GraphQLEnumType(RatingGroupbyEnumList)

const RatingArgs = Object.assign(
  {
    resource_id: {
      type: GraphQLInt,
      description: 'ID ??????????????, ?? ???????????????? ?????????????????????? ????????????????',
    },
  },
  listArgs,
  {
    type: {
      type: GraphQLInt,
    },
    groupBy: {
      type: RatingGroupbyEnum,
    },
    sort: {
      type: new GraphQLList(
        new GraphQLInputObjectType({
          name: 'RatingsSortBy',
          fields: {
            by: {
              type: new GraphQLEnumType({
                name: 'RatingsSortByValues',
                values: {
                  id: {
                    value: 'id',
                    description: '???? ID',
                  },
                  rating: {
                    value: 'rating',
                    description: '???? ????????????????',
                  },
                  type: {
                    value: 'type',
                    description: '???? ???????? ????????????????',
                  },
                  company: {
                    value: 'company',
                    description: '???? ????????????????',
                  },
                  rand: {
                    value: 'rand()',
                    description: '?? ?????????????????? ??????????????',
                  },
                },
              }),
              description: '???????????? ????????????????????',
            },
            dir: order,
          },
        })
      ),
    },
  }
)

const RatingsList = new RatingsListField({
  type: RatingType,
  name: 'RatingsList',
  description: RatingType.description,
  args: RatingArgs,
})

const commentsArgs = Object.assign(
  {
    resource_id: {
      type: GraphQLInt,
      description: 'ID ??????????????',
    },
    parent: {
      type: GraphQLInt,
      description: 'ID ?????????????????????????? ??????????????????????',
    },
    createdby: {
      type: GraphQLInt,
      description: 'ID ???????????? ??????????????????????',
    },
  },
  listArgs
)

const InputCoordsType = new GraphQLInputObjectType({
  name: 'InputCoordsType',
  fields: coordsFields,
})

const resourcesTypes = new GraphQLEnumType({
  name: 'ResourceTypeEnum',
  description: '???????? ????????????????',
  values: {
    topic: {
      value: 'topic',
      description: '??????????',
    },
    obzor: {
      value: 'obzor',
      description: '?????????? ??????????????????',
    },
    company: {
      value: 'company',
      description: '????????????????',
    },
  },
})

const resourcesArgs = Object.assign(
  {
    template: {
      type: GraphQLInt,
      description: 'ID ??????????????',
    },
    parent: {
      type: GraphQLInt,
      description: 'ID ????????????????',
    },
    excludeTemplates: {
      type: new GraphQLList(GraphQLInt),
      description: '?? ???????????? ?????????????????? ???????? ?????????????????? ??????????????????',
    },
    tag: {
      type: GraphQLString,
      description: '???????????? ???? ????????',
    },
    alias: {
      type: GraphQLString,
      description: '?????????? ???? ???????????? ??????????????????',
    },
    uri: {
      type: GraphQLString,
      description: '?????????? ???? URI ??????????????????',
    },
    resourceType: {
      type: resourcesTypes,
      description: '?????? ??????????????',
    },
    coords: {
      type: new GraphQLInputObjectType({
        name: 'SearchCoordsType',
        description: '?????????? ???????????????? ?? ???????????????? ??????????????',
        fields: () => ({
          center: {
            type: InputCoordsType,
          },
          radius: {
            type: GraphQLFloat,
            description: '???????????? ?? ????????????????????',
          },
        }),
      }),
      description: '?????????? ???????????????? ?? ???????????????? ??????????????',
    },
    center: {
      type: InputCoordsType,
      description: '?????????????????????? ???? ???????????????????? ???? ?????????????????? ????????????',
    },
  },
  listArgs,
  {
    sort: {
      type: new GraphQLList(
        new GraphQLInputObjectType({
          name: 'ResourcesSortBy',
          fields: {
            by: {
              type: new GraphQLEnumType({
                name: 'ResourcesSortByValues',
                values: {
                  id: {
                    value: 'id',
                    description: '???? ID',
                  },
                  name: {
                    value: 'name',
                    description: '???? ????????????????????????',
                  },
                  createdon: {
                    value: 'createdon',
                    description: '???? ???????? ????????????????',
                  },
                  rand: {
                    value: 'rand()',
                    description: '?? ?????????????????? ??????????????',
                  },
                },
              }),
              description: '???????????? ????????????????????',
            },
            dir: order,
          },
        })
      ),
    },
  }
)

const editVersionArgs = Object.assign(
  {
    status: {
      type: new GraphQLList(GraphQLString),
      description: '????????????',
    },
    companyId: {
      type: GraphQLInt,
      description: 'ID ????????????????, ?? ?????????????? ?????????????????? ??????????????????',
    },
    createdby: {
      type: GraphQLInt,
      description: '?????????? ??????????????????',
    },
    editedby: {
      type: GraphQLInt,
      description: '???????????????? ??????????????????',
    },
  },
  listArgs
)

const companiesArgs = Object.assign({}, resourcesArgs, {
  // sort: {
  //   type: new GraphQLList(new GraphQLInputObjectType({
  //     name: "ResourcesSortBy",
  //     fields: {
  //       by: {
  //         type: new GraphQLEnumType({
  //           name: 'ResourcesSortByValues',
  //           values: {
  //             id: {
  //               value: 'id',
  //               description: '???? ID',
  //             },
  //             rand: {
  //               value: 'rand()',
  //               description: '?? ?????????????????? ??????????????',
  //             },
  //             // wefewf: {
  //             //   value: 'wegweg',
  //             //   description: '?? ?????????????????? ??????????????',
  //             // },
  //           },
  //         }),
  //         description: '???????????? ????????????????????',
  //       },
  //       dir: order,
  //     },
  //   })),
  // },
})

const UsersArgs = Object.assign(
  {
    delegatesOnly: {
      type: GraphQLBoolean,
      description: '???????????? ??????????????????????????',
    },
    myOnly: {
      type: GraphQLBoolean,
      description: '???????????? ??????',
    },
  },
  listArgs
)

const RootType = new GraphQLObjectType({
  name: 'RootType',
  description: '???????????????? ????????????',
  fields: {
    siteContent: {
      type: SiteContentType,
      description: SiteContentType.description,
      args: SiteContentArgs,
    },
    companiesList: new listField({
      type: CompanyType,
      name: 'companiesList',
      description: '???????????? ???????????????? ?? ??????????????????????????????',
      args: companiesArgs,
    }),
    companies: {
      type: new GraphQLList(CompanyType),
      name: 'Companies',
      description: '???????????? ????????????????',
      args: companiesArgs,
    },
    company: {
      type: CompanyType,
      description: '????????????????',
      args: {
        id: {
          type: GraphQLInt,
          description: '?????????? ???????????????? ???? ID',
        },
        uri: {
          type: GraphQLString,
          description: '?????????? ???????????????? ???? ??????',
        },
      },
    },
    redirectsList: new listField({
      type: RedirectType,
      name: 'redirectsList',
      description: '???????????? ???????????? ?????????????????? ?? ??????????????????????????????',
      args: listArgs,
    }),
    redirects: {
      type: new GraphQLList(RedirectType),
      description: '???????????? ???????????? ??????????????????',
      args: listArgs,
    },
    redirect: {
      type: RedirectType,
      description: RedirectType.description,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
    },
    resourcesList: new listField({
      type: ResourceType,
      name: 'resourcesList',
      description: '???????????? ???????????????????? ?? ??????????????????????????????',
      args: resourcesArgs,
    }),
    resources: {
      type: new GraphQLList(ResourceType),
      name: 'Resources',
      description: '???????????? ????????????????????',
      args: resourcesArgs,
    },
    resource: {
      type: ResourceType,
      description: '????????????????',
      args: {
        id: {
          type: GraphQLInt,
        },
        uri: {
          type: GraphQLString,
          description: '?????? ??????????????',
        },
        resourceType: {
          type: resourcesTypes,
          description: '?????? ??????????????',
        },
        tag: {
          type: GraphQLString,
          description: '???????????? ???? ????????',
        },
      },
      // resolve: getCompany,
    },
    ratingsList: RatingsList,
    ratings: {
      type: new GraphQLList(RatingType),
      description: '???????????? ????????????????????????',
      args: RatingArgs,
    },
    vote: {
      type: RatingType,
      description: '?????????????? (?????????????????? ??????????)',
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      // resolve: getRating,
    },
    commentsList: new listField({
      type: CommentType,
      name: 'commentsList',
      description: '???????????? ???????????????????????? ?? ??????????????????????????????',
      args: commentsArgs,
    }),
    comments: {
      type: new GraphQLList(CommentType),
      name: 'Comments',
      description: '???????????? ????????????????????????',
      args: commentsArgs,
    },
    comment: {
      type: CommentType,
      description: CommentType.description,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
    },
    usersList: new listField({
      type: UserType,
      name: 'usersList',
      description: '???????????? ?????????????????????????? ?? ??????????????????????????????',
      args: UsersArgs,
    }),
    users: {
      type: new GraphQLList(UserType),
      name: 'Users',
      description: '???????????? ??????????????????????????',
      args: UsersArgs,
    },
    user: {
      type: UserType,
      name: 'User',
      description: UserType.description,
      args: {
        id: {
          type: GraphQLInt,
        },
        username: {
          type: GraphQLString,
          description: '?????????? ???? ??????????????????',
        },
        ownProfile: {
          type: GraphQLBoolean,
          description: '???????????????? ???????????????? ????????????????????????',
        },
      },
    },
    ws_connections: {
      type: new GraphQLList(WsConnectionType),
      description: 'WebSocket-????????????????????',
      args: {
        user: {
          type: GraphQLInt,
          description: 'ID ????????????????????????',
        },
      },
    },
    search: {
      type: new GraphQLList(SearchResultType),
      description: '??????????',
      args: listArgs,
      // args: Object.assign({

      // }, listArgs);
    },
    searchStatsList: new listField({
      type: SearchStatType,
      name: 'searchStatsList',
      description: '???????????? ?????????????????????? ?????????????????? ???????????????? ?? ??????????????????????????????',
      args: Object.assign({}, listArgs),
    }),
    searchStats: {
      type: new GraphQLList(SearchStatType),
      description: '???????????? ?????????????????????? ?????????????????? ????????????????',
      args: Object.assign({}, listArgs),
    },
    searchStat: {
      type: SearchStatType,
      description: SearchStatType.description,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
    },
    editVersionsList: new listField({
      type: EditVersionType,
      name: 'editVersionsList',
      description: '???????????? ?????????????????? ???????????????? ?? ??????????????????????????????',
      args: editVersionArgs,
    }),
    editVersions: {
      type: new GraphQLList(EditVersionType),
      description: '???????????? ?????????????????????? ?????????????????? ????????????????',
      args: editVersionArgs,
    },
    editVersion: {
      type: EditVersionType,
      description: EditVersionType.description,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
    },

    // // ratings: {
    // //   type: new GraphQLList(RatingType),
    // //   name: "RatingsList",
    // //   description: RatingType.description,
    // //   args: listArgs,
    // //   // resolve: getRatings,
    // // },
  },
})

export default RootType

const mutationFields = {
  clearCache: {
    type: GraphQLBoolean,
    description: '?????????? ????????',
  },
  addCompany: {
    type: CompanyType,
    description: '???????????????????? ???????????? ??????????????????',
  },
  addCompanyGalleryImage: {
    type: CompanyType,
    description: '???????????????????? ???????????????? ?? ?????????????? ??????????????????',
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'ID ????????????????',
      },
      image: {
        type: new GraphQLNonNull(GraphQLString),
        description: '?????? ?? ????????????????',
      },
    },
  },
  updateCompany: {
    type: EditVersionType,
    description: '???????????????????? ???????????????????? ???????????? ????????????????',
    args: {
      target_id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'ID ????????????????',
      },
      data: {
        type: new GraphQLNonNull(GraphQLJSON),
        description: '???????????????????? ???????????? ????????????????',
      },
    },
  },
  logCoords: {
    type: WsConnectionType,
    description: '?????????????????????? ??????????????????',
    args: {
      lat: {
        type: new GraphQLNonNull(GraphQLFloat),
        description: '??????????????',
      },
      lng: {
        type: new GraphQLNonNull(GraphQLFloat),
        description: '????????????',
      },
    },
  },
  saveSearchStat: {
    type: SearchStatType,
    description: '???????????????????? ???????????????????? ????????????',
    args: {
      query: {
        type: new GraphQLNonNull(GraphQLString),
        description: '?????????????????? ????????????',
      },
      finded: {
        type: new GraphQLNonNull(GraphQLInt),
        description: '???????????????????? ?????????????????? ????????????????',
      },
    },
  },
  addTopic: {
    type: ResourceType,
    description: '???????????????????? ???????????? ????????????',
  },
  addComment: {
    type: CommentType,
    description: '???????????????????? ???????????? ??????????????????????',
    args: {
      target_id: {
        type: new GraphQLNonNull(GraphQLInt),
        description: 'ID ???????????????? ??????????????',
      },
      target_class: {
        type: new GraphQLNonNull(GraphQLString),
        description: '?????????? ???????????????? ??????????????',
      },
      parent: {
        type: GraphQLInt,
        description: 'ID ?????????????????????????? ??????????????????????',
      },
      text: {
        type: GraphQLString,
        description: '?????????? ??????????????????????',
      },
    },
  },
}

export const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => mutationFields,
})
