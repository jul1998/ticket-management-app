import Ticket from "../(models)/Ticket";
import { NextResponse} from "next/server";

export async function POST({ request }) {

  try{
    const body = await request.json();
    const ticket = new Ticket(body);
    const response = await ticket.save();
    return NextResponse.json({message: "Ticket created successfully", response}, {status: 201});
  }
    catch(error){
        return NextResponse.json({message: error.message}, {status: 400});
    }
}
    