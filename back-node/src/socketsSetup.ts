import { Server as WebSocketIo } from "socket.io"
import { Server, Socket } from "socket.io"
import { httpApp } from "./app"
import { CORS_URL } from "./config"
import { WsClientEmits } from "./WsClientEmits.interface"
import { WsServerEmits } from "./WsServerEmits.interface"

//server: Socket<> and Server<>
//first client emits - second server emits

export type SioSocket = Socket<WsClientEmits, WsServerEmits>

export type SioServer = Server<WsClientEmits, WsServerEmits>

export type SioListener = (io: SioServer, socket: SioSocket) => void | Promise<void>

export const io: SioServer = new WebSocketIo(httpApp, {
  cors: {
    origin: [CORS_URL],
  },
})
