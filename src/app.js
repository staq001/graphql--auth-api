// const express = require('express')
// const bcrypt = require('bcrypt')
// const graphql = require('graphql')
// const { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = require('graphql')
// require('./db/mongoose.js')
// const User = require('./models/user.js')


// const { graphqlHTTP } = require('express-graphql')
// const app = express()
// const port = process.env.PORT || 3000


// const UserType = new GraphQLObjectType({
//   name: "User",
//   fields: {
//     _id: {
//       type: GraphQLID
//     },
//     firstName: {
//       type: GraphQLString
//     },
//     lastName: {
//       type: GraphQLString
//     },
//     email: {
//       type: GraphQLString
//     },
//     sex: {
//       type: GraphQLString
//     },
//     password: {
//       type: GraphQLString
//     },
//   }
// })


// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     getAllUsers: {
//       type: new GraphQLList(UserType),
//       async resolve(parent, args) {
//         try {
//           const users = await User.find({})
//           return users
//         } catch (e) {
//           throw new Error(`User not created:  ${e}`)
//         }
//       }
//     },
//     getUserById: {
//       type: UserType,
//       args: {
//         _id: {
//           type: GraphQLID
//         },
//       },
//       async resolve(parent, args) {
//         try {
//           const _id = args._id
//           const user = await User.findById({ _id })
//           return user
//         } catch (e) {
//           throw new Error(`User not created:  ${e}`)
//         }
//       }
//     }
//   }
// })

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         firstName: {
//           type: GraphQLString
//         },
//         lastName: {
//           type: GraphQLString
//         },
//         email: {
//           type: GraphQLString
//         },
//         sex: {
//           type: GraphQLString
//         },
//         password: {
//           type: GraphQLString
//         },
//       },
//       async resolve(parent, args) {
//         const data = {
//           firstName: args.firstName,
//           lastName: args.lastName,
//           email: args.email,
//           sex: args.sex,
//           password: args.password,
//         }
//         try {
//           const user = new User(data)
//           await user.save()
//           return user
//         } catch (e) {
//           throw new Error(`User not created:  ${e}`)
//         }
//       }
//     },
//     deleteUser: {
//       type: UserType,
//       args: {
//         _id: {
//           type: GraphQLID
//         }
//       },
//       async resolve(parent, args) {
//         try {
//           const _id = args._id
//           const user = await User.findByIdAndDelete({ _id })
//           return user

//         } catch (e) {
//           throw new Error(`User not found: ${e}`)
//         }
//       }
//     }
//   }
// })


// const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation })


// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }))

// app.listen(port, () => {
//   console.log(`Server is up on port port ${port}`)
// })

// this is just another way to create a schema--