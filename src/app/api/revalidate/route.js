import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();
    const authorizationHeader = req.headers.get("Authorization");
    if (!authorizationHeader) {
      return NextResponse.json(
        {
          message: "Authorization header missing",
        },
        { status: 401 }
      );
    }
    const token = authorizationHeader.split(" ")[1];
    if (token !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json(
        {
          message: "Invalid token",
        },
        { status: 403 }
      );
    }
    console.log(payload);
    const { model, entry } = payload;

    if (model === "page" && entry) {
      const { locale, slug } = entry;

      if (locale && slug) {
        const path = `/${locale}/${slug}`;

        console.log("waiting for revalidation", path);
        await revalidatePath(path);

        return NextResponse.json({
          revalidated: true,
          path,
          now: Date.now(),
        });
      } else {
        return NextResponse.json(
          {
            message: "Missing locale or slug",
          },
          { status: 400 }
        );
      }
    }

    if (model === "global") {
      console.log("Global model updated. Revalidating global layout...");
      await revalidateTag("global-layout");

      return NextResponse.json({
        revalidated: true,
        message: "Revalidated global layout (header/footer)",
        now: Date.now(),
      });
    }

    if (model === "pricing") {
      console.log("Pricing model updated. Revalidating pricing data...");
      await revalidateTag("pricing-data");

      return NextResponse.json({
        revalidated: true,
        message: "Revalidated pricing data",
        now: Date.now(),
      });
    }

    return NextResponse.json(
      {
        message: 'Invalid model. Only "page" is supported.',
      },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
