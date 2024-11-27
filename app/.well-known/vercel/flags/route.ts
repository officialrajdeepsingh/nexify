import type { NextRequest } from "next/server";
import type { ApiData } from "@vercel/flags";
import { NextResponse } from "next/server";
import { verifyAccess } from "@vercel/flags";

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"));
  if (!access) return NextResponse.json(null, { status: 401 });

  return NextResponse.json<ApiData>({
    definitions: {
      banner: {
        description: 'Hide and Show banner on the website.',
        options: [
          { value: false, label: 'Off' },
          { value: true, label: 'On' },
        ],
      },
      banner_discount: {
        description: 'The Banner discount on the website.',
        options: [
          { value: 30, label: '30%' },
          { value: 40, label: '40%' },
          { value: 10, label: '10%' },
          { value: 60, label: '50%' },
        ],
      }
    },
  });
}
