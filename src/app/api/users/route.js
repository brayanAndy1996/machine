import { NextResponse } from 'next/server';
import UserModel from '../../../../models/users'
import dbConnection from '../../../../config/database'

export async function GET(request) {
    try {
        await dbConnection()
        const { searchParams } = new URL(request.url);
        console.log("🚀 ~ GET ~ searchParams:", searchParams)
        const email = searchParams.get('email')
        const usuario = await UserModel.findOne({email})
        if(!usuario){
            return NextResponse.json(
                { error: 'Usuario no encontrado' }, 
                { status: 404 }
              );
        } 
        return NextResponse.json(usuario, { status: 201 });
    } catch (error) {
        console.log("🚀 ~ GET ~ error:", error)
        if (error.name === 'ValidationError') {
            const errorMessages = Object.values(error.errors).map(err => err.message);
            
            return NextResponse.json(
              { 
                error: 'Error de validación',
                details: errorMessages
              }, 
              { status: 400 }
            );
          }
        return NextResponse.json(
            { error: 'Error creating user' }, 
            { status: 500 }
          );
    }
}

export async function POST(request) {
    try {
      await dbConnection();
      const data = await request.json();
      const body = JSON.parse(data.body)
      console.log("🚀 ~ POST ~ data:", body)
      const usuario = new UserModel(body);
      await usuario.save();
      const newUser = await UserModel.findOne({email:body.email})
      return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
      console.log("🚀 ~ POST ~ error:", error)
      if (error.name === 'ValidationError') {
        const errorMessages = Object.values(error.errors).map(err => err.message);
        
        return NextResponse.json(
          { 
            error: 'Error de validación',
            details: errorMessages
          }, 
          { status: 400 }
        );
      }
      return NextResponse.json(
        { error: 'Error creating usuario' }, 
        { status: 500 }
      );
    }
  }