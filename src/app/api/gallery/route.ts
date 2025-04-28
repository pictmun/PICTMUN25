import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
const GALLERY_FOLDER_ID = process.env.GOOGLE_GALLERY_FOLDER_ID; // Main gallery folder

// Service account credentials
const credentials = {
  type: process.env.GOOGLE_TYPE,
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
  auth_uri: process.env.GOOGLE_AUTH_URI,
  token_uri: process.env.GOOGLE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.GOOGLE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.GOOGLE_CLIENT_CERT_URL,
  universe_domain: process.env.GOOGLE_UNIVERSE_DOMAIN,
};

async function getDriveClient() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });
  return google.drive({ version: "v3", auth });
}

// Fetch all folders inside a parent folder (e.g., gallery years)
async function listFolders(parentFolderId: string) {
  const drive = await getDriveClient();

  const res = await drive.files.list({
    q: `'${parentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: "files(id, name)",
  });

  return res.data.files || [];
}

// Fetch all files from a given folder, sorted by date descending
async function listFiles(folderId: string) {
    const drive = await getDriveClient();
  
    const res = await drive.files.list({
      q: `'${folderId}' in parents and trashed = false`,
      fields: "files(id, name, mimeType, webViewLink, webContentLink, createdTime, modifiedTime)",
    });
  
    let files = res.data.files || [];
  
    // Sort files by modifiedTime descending (or createdTime if you prefer) uncomment below if it's needed
    // files.sort((a, b) => {
    //   const dateA = new Date(a.modifiedTime || a.createdTime || "").getTime();
    //   const dateB = new Date(b.modifiedTime || b.createdTime || "").getTime();
    //   return dateB - dateA; // Descending: newest first
    // });
  
    return files;
  }
  

// Handle GET request (Get all year folders)
export async function GET(req: NextRequest) {
  try {
    const folders = await listFolders(GALLERY_FOLDER_ID!);
    return NextResponse.json({ folders });
  } catch (error: any) {
    console.error("Error fetching folders:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handle POST request (Get files from a specific folder)
export async function POST(req: NextRequest) {
  try {
    const { folderId } = await req.json();

    if (!folderId) {
      return NextResponse.json({ error: "Folder ID is required" }, { status: 400 });
    }

    const files = await listFiles(folderId);
    return NextResponse.json({ files });
  } catch (error: any) {
    console.error("Error fetching files:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
