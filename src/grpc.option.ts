import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url:'localhost:50051',
        package:['notification'],
        protoPath:[join(__dirname,'./notification/notification.proto')]
    }
}