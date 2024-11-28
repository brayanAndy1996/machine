import { NextResponse } from 'next/server';
import UserModel from '../../../../../models/users'
import dbConnection from '../../../../../config/database'

export async function GET() {
    try {
        await dbConnection()
        const usuario = await UserModel.find()
        return NextResponse.json(usuario, { status: 201 });
    } catch (error) {
        console.log("🚀 ~ GET ~ error:", error)
        
        return NextResponse.json(
            { 
              error: 'Error al traer los usuarios'
            }, 
            { status: 400 }
          );
    }
}