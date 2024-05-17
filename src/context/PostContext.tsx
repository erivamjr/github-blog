import { ReactNode, createContext, useEffect, useState } from 'react'
import data from '../../mock.json'
import userMock from '../../user.json'

interface UserProps {
  login: string
  name: string
  avatar_url: string
  followers: number
  company: string
  bio: string
}

export interface PostProps {
  id: number
  title: string
  body: string
  created_at: string
  comments: number
  user: Omit<UserProps, 'name' | 'bio' | 'company'>
}

interface PostContextProps {
  posts: PostProps[]
  user: UserProps
}

export const PostContext = createContext({} as PostContextProps)

interface PostProviderProps {
  children: ReactNode
}

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<PostProps[]>([])
  const [user, setUser] = useState<UserProps>({} as UserProps)

  console.log(posts)

  useEffect(() => {
    const mappedPsots = data.items.map((post) => {
      return {
        id: post.number,
        title: post.title,
        body: post.body,
        created_at: post.created_at,
        comments: post.comments,
        user: {
          login: post.user.login,
          avatar_url: post.user.avatar_url,
          followers: Number(post.user.followers_url),
          company: post.user.organizations_url,
        },
      }
    })
    setPosts(mappedPsots)
  }, [])

  useEffect(() => {
    const mappedUser = {
      login: userMock.login,
      name: userMock.name,
      avatar_url: userMock.avatar_url,
      followers: userMock.followers,
      company: userMock.company,
      bio: userMock.bio,
    }
    setUser(mappedUser)
  }, [])

  /* const getDataPost = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data)
  } */

  return (
    <PostContext.Provider value={{ posts, user }}>
      {children}
    </PostContext.Provider>
  )
}
