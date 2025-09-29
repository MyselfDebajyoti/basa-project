import { runMemberUpload } from "../../../scripts/memberUploader.js";

export async function POST(request) {
  console.log("🚀 Upload API called");

  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("❌ Failed to parse request body:", parseError);
      return Response.json(
        {
          success: false,
          error: "Invalid request body",
        },
        { status: 400 }
      );
    }

    const { uploadKey } = body;

    // Security check
    if (uploadKey !== "BASA_MEMBER_UPLOAD_2024") {
      console.warn("❌ Unauthorized upload attempt");
      return Response.json(
        {
          success: false,
          error: "Unauthorized - Invalid upload key",
        },
        { status: 401 }
      );
    }

    console.log("✅ Upload key validated, starting upload...");

    // Run the upload
    const result = await runMemberUpload();

    console.log("✅ Upload completed:", result);

    return Response.json({
      success: true,
      message: "Member data uploaded successfully",
      stats: {
        uploaded: result.success,
        failed: result.errors,
        total: result.total,
      },
      details: result.errorDetails || [],
    });
  } catch (error) {
    console.error("💥 Upload API error:", error);

    // Handle specific error types
    let errorMessage = error.message;
    let statusCode = 500;

    if (
      error.message.includes(
        "Collection with the requested ID could not be found"
      )
    ) {
      errorMessage =
        "Database collection not found. Please create the users collection in Appwrite console first.";
      statusCode = 400;
    } else if (error.message.includes("DATABASE_ID is not configured")) {
      errorMessage =
        "Database configuration error. Please check environment variables.";
      statusCode = 500;
    } else if (error.message.includes("APPWRITE_ENDPOINT")) {
      errorMessage =
        "Appwrite configuration error. Please check environment variables.";
      statusCode = 500;
    }

    return Response.json(
      {
        success: false,
        error: errorMessage,
        details: error.stack ? error.stack.split("\n").slice(0, 5) : [],
      },
      { status: statusCode }
    );
  }
}
