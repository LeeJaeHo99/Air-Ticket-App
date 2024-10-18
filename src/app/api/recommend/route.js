import { NextResponse } from 'next/server';
import { connectDB } from '@/library/mongodb';

export async function GET() {
    try {
        const db = (await connectDB).db('air-ticket');
        const collection = db.collection('recommend');
        const destination = await collection.find({}).toArray();

        return NextResponse.json({ success: true, data: destination });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}