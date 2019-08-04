export default interface NetworkRequest{
    url: string,
    method: RequestType,
    headers?: string,
    data?: any
}

export enum RequestType {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete'
}