import { connectDB } from "@/library/mongodb";

export async function addTicket(ticketData) {
    const db = (await connectDB).db('air-ticket');
    const collection = db.collection("goTicket");
    const result = await collection.insertOne(ticketData);
    return result;
}