import * as jwt from 'jsonwebtoken'
import { getUserId } from '../utils'

export default {
    Query: {
        messages: async (parent, args, ctx, info) => {
            return ctx.db.query.messages({
                where: {}
            }, info)
        },
        myName: async (parent, args, ctx, info) => {
            const userId = getUserId(ctx)

            console.log(userId)

            const user = await ctx.db.query.user({
                where: {
                    id: userId
                }
            }, ` {
                name
            }`)

            return user.name
        }
    },
    Mutation: {
        login: async (parent, args, ctx, info) => {
            const { name } = args
            
            let user = await ctx.db.query.user({
                where: {
                    name
                }
            }, `{
                id
            }`)

            if (!user) {
                user = await ctx.db.mutation.createUser({
                    data: {
                        name
                    }
                }, `{
                    id
                }`)
            }

            return jwt.sign({ userId: user.id }, process.env.APP_SECRET)
        },
        sendMessage: async (parent, args, ctx, info) => {
            const { text } = args
            const userId = getUserId(ctx)

            return ctx.db.mutation.createMessage({
                data: {
                    text,
                    user: {
                        connect: {
                            id: userId
                        }
                    }
                }
            }, info)
        }
    },
    Subscription: {
        messageSubscription: {
            subscribe: async (parent, args, ctx, info) => {
                return ctx.db.subscription.message({
                    where: {}
                }, info)
            }
        }
    }
}