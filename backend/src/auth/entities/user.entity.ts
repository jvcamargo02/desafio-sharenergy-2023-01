import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type IUser = {
    name: string;
    username: string;
    password: string;
}

export type UserDocument = User & Document;

@Schema()
export class User {
    
    @Prop({ required: true })
    name: string;

    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    password: string;

    constructor(props: User) {
        Object.assign(this, props)
    }
}

export const UserSchema = SchemaFactory.createForClass(User);