/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * COMMERCE
 * COMMERCE REST API DOC
 * OpenAPI spec version: 1.0.0
 */
import {
  useInfiniteQuery,
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  ChatMessagesDto,
  ChatRoomInfoDto,
  ChatRoomListDto,
  ExitChatRoom200,
  ModifyChatRoomName200,
  ModifyRequestBody,
  ShowMessagesParams,
  ShowRoom403,
  ShowRoom404,
  Write200,
  WriteRequestBody
} from '../../model'
import { axiosInstance } from '../../../../utils/axiosInstance';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary 메세지 전송
 */
export const write = (
    roomId: number,
    writeRequestBody: WriteRequestBody,
 options?: SecondParameter<typeof axiosInstance>,) => {
      
      
      return axiosInstance<Write200>(
      {url: `/api/chat/room/${roomId}/write`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: writeRequestBody
    },
      options);
    }
  


export const getWriteMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof write>>, TError,{roomId: number;data: WriteRequestBody}, TContext>, request?: SecondParameter<typeof axiosInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof write>>, TError,{roomId: number;data: WriteRequestBody}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof write>>, {roomId: number;data: WriteRequestBody}> = (props) => {
          const {roomId,data} = props ?? {};

          return  write(roomId,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type WriteMutationResult = NonNullable<Awaited<ReturnType<typeof write>>>
    export type WriteMutationBody = WriteRequestBody
    export type WriteMutationError = unknown

    /**
 * @summary 메세지 전송
 */
export const useWrite = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof write>>, TError,{roomId: number;data: WriteRequestBody}, TContext>, request?: SecondParameter<typeof axiosInstance>}
) => {

      const mutationOptions = getWriteMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * 지정된 채팅방의 이름을 수정합니다.
 * @summary 채팅방 이름 수정
 */
export const modifyChatRoomName = (
    chatRoomId: number,
    modifyRequestBody: ModifyRequestBody,
 options?: SecondParameter<typeof axiosInstance>,) => {
      
      
      return axiosInstance<ModifyChatRoomName200>(
      {url: `/api/chat/room/modify/${chatRoomId}`, method: 'PATCH',
      headers: {'Content-Type': 'application/json', },
      data: modifyRequestBody
    },
      options);
    }
  


export const getModifyChatRoomNameMutationOptions = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof modifyChatRoomName>>, TError,{chatRoomId: number;data: ModifyRequestBody}, TContext>, request?: SecondParameter<typeof axiosInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof modifyChatRoomName>>, TError,{chatRoomId: number;data: ModifyRequestBody}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof modifyChatRoomName>>, {chatRoomId: number;data: ModifyRequestBody}> = (props) => {
          const {chatRoomId,data} = props ?? {};

          return  modifyChatRoomName(chatRoomId,data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ModifyChatRoomNameMutationResult = NonNullable<Awaited<ReturnType<typeof modifyChatRoomName>>>
    export type ModifyChatRoomNameMutationBody = ModifyRequestBody
    export type ModifyChatRoomNameMutationError = string

    /**
 * @summary 채팅방 이름 수정
 */
export const useModifyChatRoomName = <TError = string,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof modifyChatRoomName>>, TError,{chatRoomId: number;data: ModifyRequestBody}, TContext>, request?: SecondParameter<typeof axiosInstance>}
) => {

      const mutationOptions = getModifyChatRoomNameMutationOptions(options);

      return useMutation(mutationOptions);
    }
    /**
 * @summary 채팅방 정보 조회
 */
export const showRoom = (
    roomId: number,
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<ChatRoomInfoDto>(
      {url: `/api/chat/room/${roomId}`, method: 'GET', signal
    },
      options);
    }
  

export const getShowRoomQueryKey = (roomId: number,) => {
    return [`/api/chat/room/${roomId}`] as const;
    }

    
export const getShowRoomInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof showRoom>>>, TError = ShowRoom403 | ShowRoom404>(roomId: number, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof showRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowRoomQueryKey(roomId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof showRoom>>> = ({ signal }) => showRoom(roomId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(roomId),  staleTime: 10000,  ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof showRoom>>, TError, TData> & { queryKey: QueryKey }
}

export type ShowRoomInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof showRoom>>>
export type ShowRoomInfiniteQueryError = ShowRoom403 | ShowRoom404

/**
 * @summary 채팅방 정보 조회
 */
export const useShowRoomInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof showRoom>>>, TError = ShowRoom403 | ShowRoom404>(
 roomId: number, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof showRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowRoomInfiniteQueryOptions(roomId,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getShowRoomQueryOptions = <TData = Awaited<ReturnType<typeof showRoom>>, TError = ShowRoom403 | ShowRoom404>(roomId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowRoomQueryKey(roomId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof showRoom>>> = ({ signal }) => showRoom(roomId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(roomId),  staleTime: 10000,  ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof showRoom>>, TError, TData> & { queryKey: QueryKey }
}

export type ShowRoomQueryResult = NonNullable<Awaited<ReturnType<typeof showRoom>>>
export type ShowRoomQueryError = ShowRoom403 | ShowRoom404

/**
 * @summary 채팅방 정보 조회
 */
export const useShowRoom = <TData = Awaited<ReturnType<typeof showRoom>>, TError = ShowRoom403 | ShowRoom404>(
 roomId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowRoomQueryOptions(roomId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 채팅방 정보 조회
 */
export const showMessages = (
    roomId: number,
    params?: ShowMessagesParams,
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<ChatMessagesDto>(
      {url: `/api/chat/room/${roomId}/messages`, method: 'GET',
        params, signal
    },
      options);
    }
  

export const getShowMessagesQueryKey = (roomId: number,
    params?: ShowMessagesParams,) => {
    return [`/api/chat/room/${roomId}/messages`, ...(params ? [params]: [])] as const;
    }

    
export const getShowMessagesInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof showMessages>>, ShowMessagesParams['lastId']>, TError = unknown>(roomId: number,
    params?: ShowMessagesParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof showMessages>>, TError, TData, Awaited<ReturnType<typeof showMessages>>, QueryKey, ShowMessagesParams['lastId']>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowMessagesQueryKey(roomId,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof showMessages>>, QueryKey, ShowMessagesParams['lastId']> = ({ signal, pageParam }) => showMessages(roomId,{...params, lastId: pageParam || params?.['lastId']}, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(roomId),  staleTime: 10000,  ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof showMessages>>, TError, TData, Awaited<ReturnType<typeof showMessages>>, QueryKey, ShowMessagesParams['lastId']> & { queryKey: QueryKey }
}

export type ShowMessagesInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof showMessages>>>
export type ShowMessagesInfiniteQueryError = unknown

/**
 * @summary 채팅방 정보 조회
 */
export const useShowMessagesInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof showMessages>>, ShowMessagesParams['lastId']>, TError = unknown>(
 roomId: number,
    params?: ShowMessagesParams, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof showMessages>>, TError, TData, Awaited<ReturnType<typeof showMessages>>, QueryKey, ShowMessagesParams['lastId']>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowMessagesInfiniteQueryOptions(roomId,params,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getShowMessagesQueryOptions = <TData = Awaited<ReturnType<typeof showMessages>>, TError = unknown>(roomId: number,
    params?: ShowMessagesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showMessages>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowMessagesQueryKey(roomId,params);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof showMessages>>> = ({ signal }) => showMessages(roomId,params, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(roomId),  staleTime: 10000,  ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof showMessages>>, TError, TData> & { queryKey: QueryKey }
}

export type ShowMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof showMessages>>>
export type ShowMessagesQueryError = unknown

/**
 * @summary 채팅방 정보 조회
 */
export const useShowMessages = <TData = Awaited<ReturnType<typeof showMessages>>, TError = unknown>(
 roomId: number,
    params?: ShowMessagesParams, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showMessages>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowMessagesQueryOptions(roomId,params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 채팅방 생성
 */
export const makeChatRoom = (
    theirName: string,
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<ChatRoomInfoDto>(
      {url: `/api/chat/room/make/${theirName}`, method: 'GET', signal
    },
      options);
    }
  

export const getMakeChatRoomQueryKey = (theirName: string,) => {
    return [`/api/chat/room/make/${theirName}`] as const;
    }

    
export const getMakeChatRoomInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof makeChatRoom>>>, TError = unknown>(theirName: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof makeChatRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getMakeChatRoomQueryKey(theirName);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof makeChatRoom>>> = ({ signal }) => makeChatRoom(theirName, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(theirName),  staleTime: 10000,  ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof makeChatRoom>>, TError, TData> & { queryKey: QueryKey }
}

export type MakeChatRoomInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof makeChatRoom>>>
export type MakeChatRoomInfiniteQueryError = unknown

/**
 * @summary 채팅방 생성
 */
export const useMakeChatRoomInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof makeChatRoom>>>, TError = unknown>(
 theirName: string, options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof makeChatRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getMakeChatRoomInfiniteQueryOptions(theirName,options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getMakeChatRoomQueryOptions = <TData = Awaited<ReturnType<typeof makeChatRoom>>, TError = unknown>(theirName: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof makeChatRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getMakeChatRoomQueryKey(theirName);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof makeChatRoom>>> = ({ signal }) => makeChatRoom(theirName, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(theirName),  staleTime: 10000,  ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof makeChatRoom>>, TError, TData> & { queryKey: QueryKey }
}

export type MakeChatRoomQueryResult = NonNullable<Awaited<ReturnType<typeof makeChatRoom>>>
export type MakeChatRoomQueryError = unknown

/**
 * @summary 채팅방 생성
 */
export const useMakeChatRoom = <TData = Awaited<ReturnType<typeof makeChatRoom>>, TError = unknown>(
 theirName: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof makeChatRoom>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getMakeChatRoomQueryOptions(theirName,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 채팅방 목록 조회
 */
export const showList = (
    
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<ChatRoomListDto>(
      {url: `/api/chat/room/list`, method: 'GET', signal
    },
      options);
    }
  

export const getShowListQueryKey = () => {
    return [`/api/chat/room/list`] as const;
    }

    
export const getShowListInfiniteQueryOptions = <TData = InfiniteData<Awaited<ReturnType<typeof showList>>>, TError = unknown>( options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof showList>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowListQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof showList>>> = ({ signal }) => showList(requestOptions, signal);

      

      

   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions} as UseInfiniteQueryOptions<Awaited<ReturnType<typeof showList>>, TError, TData> & { queryKey: QueryKey }
}

export type ShowListInfiniteQueryResult = NonNullable<Awaited<ReturnType<typeof showList>>>
export type ShowListInfiniteQueryError = unknown

/**
 * @summary 채팅방 목록 조회
 */
export const useShowListInfinite = <TData = InfiniteData<Awaited<ReturnType<typeof showList>>>, TError = unknown>(
  options?: { query?:Partial<UseInfiniteQueryOptions<Awaited<ReturnType<typeof showList>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowListInfiniteQueryOptions(options)

  const query = useInfiniteQuery(queryOptions) as  UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



export const getShowListQueryOptions = <TData = Awaited<ReturnType<typeof showList>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showList>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getShowListQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof showList>>> = ({ signal }) => showList(requestOptions, signal);

      

      

   return  { queryKey, queryFn,   staleTime: 10000,  ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof showList>>, TError, TData> & { queryKey: QueryKey }
}

export type ShowListQueryResult = NonNullable<Awaited<ReturnType<typeof showList>>>
export type ShowListQueryError = unknown

/**
 * @summary 채팅방 목록 조회
 */
export const useShowList = <TData = Awaited<ReturnType<typeof showList>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof showList>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getShowListQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}



/**
 * @summary 채팅방 나가기
 */
export const exitChatRoom = (
    chatRoomId: number,
 options?: SecondParameter<typeof axiosInstance>,) => {
      
      
      return axiosInstance<ExitChatRoom200>(
      {url: `/api/chat/room/exit/${chatRoomId}`, method: 'DELETE'
    },
      options);
    }
  


export const getExitChatRoomMutationOptions = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof exitChatRoom>>, TError,{chatRoomId: number}, TContext>, request?: SecondParameter<typeof axiosInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof exitChatRoom>>, TError,{chatRoomId: number}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof exitChatRoom>>, {chatRoomId: number}> = (props) => {
          const {chatRoomId} = props ?? {};

          return  exitChatRoom(chatRoomId,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type ExitChatRoomMutationResult = NonNullable<Awaited<ReturnType<typeof exitChatRoom>>>
    
    export type ExitChatRoomMutationError = unknown

    /**
 * @summary 채팅방 나가기
 */
export const useExitChatRoom = <TError = unknown,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof exitChatRoom>>, TError,{chatRoomId: number}, TContext>, request?: SecondParameter<typeof axiosInstance>}
) => {

      const mutationOptions = getExitChatRoomMutationOptions(options);

      return useMutation(mutationOptions);
    }
    