import { Request } from "express";
import { AudioFile } from "./audio";

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

export interface AudioUploadRequest extends AuthenticatedRequest {
  file?: Express.Multer.File;
  body: {
    title: string;
    description?: string;
  };
}
