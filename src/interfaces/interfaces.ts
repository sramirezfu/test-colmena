export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
