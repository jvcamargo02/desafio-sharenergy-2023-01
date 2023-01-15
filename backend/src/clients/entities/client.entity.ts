import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type IClient = {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    phone: string;
    cpf: string;
}

export type ClientDocument = Client & Document;

@Schema()
export class Client {
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    address: string;

    @Prop({ required: true })
    city: string;

    @Prop({ required: true })
    state: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true, unique: true })
    cpf: string;

    constructor(props: Client) {
        Object.assign(this, props)
    }
}

export const ClientSchema = SchemaFactory.createForClass(Client);