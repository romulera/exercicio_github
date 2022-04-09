export interface GhUser { //nome de interface começa com Letra maiuscula
    login: string
    id: string
    avatar_url: string
    html_url: string
    followers_ur: string
    following_url: string
    repos_url: string //link dos repositórios
    name: string
    blog: string
    location: string
    public_repos: string
    followers: number
    following: number
    created_at: Date //data vai com lebra maiuscula porque é um objeto
    updated_at: Date


}


