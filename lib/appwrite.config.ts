import * as sdk from "node-appwrite";

export const {
    NEXT_PUBLIC_ENDPOINT: ENDPOINT,
    KEY_APWRITE,
    API_KEY,
    DB_ID,
    CUSTOMER_COLLECTION_ID,
    ENGINEER_COLEECTION_ID,
    APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(KEY_APWRITE!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);